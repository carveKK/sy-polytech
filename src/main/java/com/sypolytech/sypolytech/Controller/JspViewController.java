package com.sypolytech.sypolytech.Controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class JspViewController {

    //메인
    @GetMapping("")
    public String Home() {
        return "index";
    }

}
