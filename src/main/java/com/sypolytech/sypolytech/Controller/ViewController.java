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

    //제품(PVC) 소개
    @GetMapping(value = "/product/pvc")
    public String productPvc() { return "productList/productPvc"; }

    //제품(OLEFIN) 소개
    @GetMapping(value = "/product/olefin")
    public String productOlefin() { return "productList/productOlefin"; }

    //제품(XLPE) 소개
    @GetMapping(value = "/product/xlpe")
    public String productXlpe() { return "productList/productXlpe"; }

    //제품(TPL) 소개
    @GetMapping(value = "/product/tpl")
    public String productTpl() { return "productList/productTpl"; }

    //제품(NemoTab) 소개
    @GetMapping(value = "/product/nemoTab")
    public String productNamoTab() { return "productList/productNemoTab"; }


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
    public String inquiry() { return "customer/customerInquiry"; }

    @GetMapping(value = "/customer/productInquiry")
    public String productInquiry() { return "customer/productInquiry"; }

    @GetMapping(value = "/test")
    public String bookMark() { return "fragments/mainPage/bookMark"; }

}
