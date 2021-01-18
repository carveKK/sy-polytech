package com.sypolytech.sypolytech.Controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class ViewController {

    //메인
    @RequestMapping(value = "/home")
    public String Home() {
        return "index";
    }

}
