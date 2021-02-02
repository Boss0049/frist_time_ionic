import { save } from 'ionicons/icons';
import {
    CameraPhoto,
    CameraResultType,
    CameraSource,
    Capacitor,
    FilesystemDirectory,
} from '@capacitor/core';
import { useCamera } from '@ionic/react-hooks/camera';
import { base64FromPath, useFilesystem } from '@ionic/react-hooks/filesystem';
import { useStorage } from '@ionic/react-hooks/storage';
import { useState, useEffect } from 'react';
import { isPlatform } from '@ionic/react'

export interface Photo {
    filepath: string;
    webviewPath?: string;
}

const PHOTO_STORAGE = 'ionic-photos';

const usePhotoGallery = () => {
    const [photos, setPhotos] = useState<Photo[]>([]);

    const { getPhoto } = useCamera();
    const { writeFile, readFile } = useFilesystem();
    const { get, set } = useStorage();

    useEffect(() => {
        const loadPhotos = async () => {
            const photosString = await get(PHOTO_STORAGE);
            const photos = photosString ? JSON.parse(photosString) : [];
            for (let photo of photos) {
                const file = await readFile({
                    path: photo.filepath,
                    directory: FilesystemDirectory.Data,
                });
                photo.webviewPath = `data:image/jpeg;base64,${file.data}`;
            }
            setPhotos(photos);
        };
        loadPhotos();
    }, [get, readFile]);

    const takePhoto = async () => {
        const newPhoto = await getPhoto({
            resultType: CameraResultType.Uri,
            source: CameraSource.Camera,
            // หรือใช้รูปแทนกล้อง source: CameraSource.Photos,
            // หรือไม่ใส่ source: เลยเพื่อเลือกในแอพตอนใช้
        });
        const fileName = new Date().getTime() + '.jpeg';
        const savedPhoto = await savePhoto(newPhoto, fileName);

        const newPhotos = [savedPhoto, ...photos];
        setPhotos(newPhotos);
        set(PHOTO_STORAGE, JSON.stringify(newPhotos));
    };

    const savePhoto = async (photo: CameraPhoto, fileName: string): Promise<Photo> => {
        if (isPlatform('hybrid')) {
            const file = await readFile({
                path: photo.path!,
            });

            const base64Data = file.data;

            const savedFile = await writeFile({
                path: fileName,
                data: base64Data,
                directory: FilesystemDirectory.Data,
            });

            return {
                filepath: savedFile.uri,
                webviewPath: Capacitor.convertFileSrc(savedFile.uri),
            };
        }
        else {
            const base64Data = await base64FromPath(photo.webPath!)
            const savedFile = await writeFile({
                path: fileName,
                data: base64Data,
                directory: FilesystemDirectory.Data,
            });

            return {
                filepath: fileName,
                webviewPath: photo.webPath,
            };
        }
    };

    return {
        photos,
        takePhoto,
    };
};

export default usePhotoGallery;