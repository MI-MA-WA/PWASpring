package de.thkoeln.gm.wa.pwaspring

import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication

@SpringBootApplication
class PwaSpringApplication

fun main(args: Array<String>) {
    runApplication<PwaSpringApplication>(*args)
}
