package de.thkoeln.gm.wa.pwaspring

import org.springframework.stereotype.Controller
import org.springframework.web.bind.annotation.GetMapping

@Controller
class WelcomeController {

    @GetMapping("/")
    fun index() : String {
        return "index"
    }
}