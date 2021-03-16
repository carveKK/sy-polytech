package com.sypolytech.sypolytech.Controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

import java.util.ArrayList;

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

    //회사소개
    @GetMapping(value = "/company/ceo")
    public String ceoInfo() { return "company/ceoInfo"; }

    //회사개요
    @GetMapping(value = "/company/overview")
    public String companyInfo() { return "company/companyInfo"; }

    //브랜드 슬로건
    @GetMapping(value = "/company/origin")
    public String companyOrigin() { return "company/companyOrigin"; }

    //오시는길
    @GetMapping(value = "/company/route")
    public String map() { return "company/companyRoute"; }



    //문의하기
    @GetMapping(value = "/customer/inquiry")
    public String inquiry() { return "customer/inquiry"; }

    @GetMapping(value = "/test")
    public String bookMark() { return "fragments/mainPage/bookMark"; }

}
