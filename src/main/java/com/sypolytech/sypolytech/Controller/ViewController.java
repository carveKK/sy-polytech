package com.sypolytech.sypolytech.Controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class ViewController {

    //메인
    @GetMapping(value = "")
    public String Home(Model model) {

        ArrayList<String> customerIndex = new ArrayList<>();
        for(int i = 1; i<16; i++){
            if(i <10){
                customerIndex.add("images/mainPage/customerImage/customer_0"+i+".png");
            }else{
                customerIndex.add("images/mainPage/customerImage/customer_"+i+".png");
            }
        }
        model.addAttribute("customerIndex", customerIndex);
        return "mainPage";
    }

    //제품소개
    @GetMapping(value = "/product")
    public String Product() { return "product"; }

}
