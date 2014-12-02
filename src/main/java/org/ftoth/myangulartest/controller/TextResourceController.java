package org.ftoth.myangulartest.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import java.io.IOException;
import java.io.InputStream;
import java.util.HashMap;
import java.util.Map;
import java.util.Properties;

/**
 * @author ftoth
 *         2013.12.10. 10:05
 */
@Controller
@RequestMapping("/textResource")
public class TextResourceController
{
    private static final String MESSAGE_PROP_FILE_NAME_PREFIX = "messages_";
    private static final String MESSAGE_PROP_FILE_NAME_EXT = ".properties";

    @RequestMapping(value="", method = RequestMethod.GET)
    @ResponseBody
    public Map<String, String> getTextResource(@RequestParam String lang) throws IOException
    {
        Map<String, String> res = new HashMap<String, String>();

/*        if (lang.equals("en")) {
            res.put("test.headline", "Hello there, This is my awesome app!");
            res.put("test.introText", "And it has i18n support!");
        }
        else {
            res.put("test.headline", "Hey, das ist meine großartige App!");
            res.put("test.introText", "Und sie untersützt mehrere Sprachen!");

        }
        return res;
        */

        Properties props = new Properties();
        String fname = "/" + MESSAGE_PROP_FILE_NAME_PREFIX + lang + MESSAGE_PROP_FILE_NAME_EXT;
        InputStream is = getClass().getResourceAsStream(fname);
        try {
            props.load(is);

            for (Object key : props.keySet()) {
                res.put((String)key, (String)props.get(key));

            }
            return res;
        }
        catch (IOException e) {
            e.printStackTrace();
            throw e;
        }
    }
}
