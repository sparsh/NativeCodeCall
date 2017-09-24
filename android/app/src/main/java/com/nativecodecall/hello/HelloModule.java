package com.nativecodecall.hello;

import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

/**
 * Created by Sparsh on 24/09/17.
 */

public class HelloModule extends ReactContextBaseJavaModule {
    public HelloModule(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @Override
    public String getName() {
            return "HelloManager";
    }


    @ReactMethod
    public void greetUser(String name, Boolean isAdmin, Callback callback) {
        String greeting = "Helloo " + name + " You are " + (isAdmin ? "not" : "") + " an admin";
        callback.invoke(greeting);

    }


}
