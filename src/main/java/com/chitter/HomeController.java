package com.chitter;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;


@Controller
public class HomeController {

	@Autowired
	PeepRepository repository;



	@RequestMapping(value = "/", method = RequestMethod.GET)
	public String index() {
		return "index";
	}

    @RequestMapping(value = "/", method = RequestMethod.POST)
    public String addPeep(@RequestParam("peep") String peep) {
        this.repository.save(new Peep(peep));
        return "redirect:/";
    }

    @RequestMapping(value = "/signUp", method = RequestMethod.GET)
    public String index() {
        return "signup";
    }
    }

}
