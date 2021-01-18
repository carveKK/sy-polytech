package com.sypolytech.sypolytech.Controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class ViewController {

    //메인
    @GetMapping(value = "")
    public String Home() {
        return "index";
    }

}
