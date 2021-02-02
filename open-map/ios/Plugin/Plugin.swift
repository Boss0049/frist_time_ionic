import Foundation
import Capacitor

/**
 * Please read the Capacitor iOS Plugin Development Guide
 * here: https://capacitorjs.com/docs/plugins/ios
 */
@objc(openMap)
public class openMap: CAPPlugin {

    @objc func echo(_ call: CAPPluginCall) {
        let value = call.getString("value") ?? ""
        call.success([
            "value": value
        ])
    }

    @objc func openMap(_ call: CAPPluginCall) {
        let latitude: CLLocationDegrees = call.getDouble("latitude", 0.0)!
        let longitude: CLLocationDegrees = call.getDouble("longitude", 0.0)!

        let regionDistance:CLLocationDistance = 10000
        let coordinates = CLLocationCoordinate2DMake(latitude, longitude)
        let regionSpan = MKCoordinateRegion(center: coordinates, latitudinalMeters: regionDistance, longitudinalMeters: regionDistance)
        
        let options = [
            MKLaunchOptionsMapCenterKey: NSValue(mkCoordinate: regionSpan.center),
            MKLaunchOptionsMapSpanKey: NSValue(mkCoordinateSpan: regionSpan.span)
        ]
        let placemark = MKPlacemark(coordinate: coordinates, addressDictionary: nil)
        let mapItem = MKMapItem(placemark: placemark)
        mapItem.name = "My Place"
        mapItem.openInMaps(launchOptions: options)
        // more logic
    }
}
