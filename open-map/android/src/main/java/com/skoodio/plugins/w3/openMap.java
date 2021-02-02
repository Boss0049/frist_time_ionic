package com.skoodio.plugins.w3;

import com.getcapacitor.JSObject;
import com.getcapacitor.NativePlugin;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import android.content.Intent;
import android.net.Uri;

@NativePlugin
public class openMap extends Plugin {

    @PluginMethod
    public void echo(PluginCall call) {
        String value = call.getString("value");

        JSObject ret = new JSObject();
        ret.put("value", value);
        call.success(ret);
    }

    @PluginMethod()
    public void open(PluginCall call) {
        Double latitude = call.getDouble("latitude");
        Double longitude = call.getDouble("longitude");
        // Creates an Intent that will load a map of San Francisco
        Uri gmmIntentUri = Uri.parse("geo:"+latitude+","+longitude);
        Intent mapIntent = new Intent(Intent.ACTION_VIEW, gmmIntentUri);
        mapIntent.setPackage("com.google.android.apps.maps");
        getContext().startActivity(mapIntent);
        // more logic
    }
}
