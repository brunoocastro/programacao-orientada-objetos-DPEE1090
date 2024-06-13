import { ConversorTemperatura } from "./conversorTemperatura";

const conversor = new ConversorTemperatura();

// Conversão de 25 Celsius para Fahrenheit
conversor.converter(25, "F");

// Conversão de 25 Celsius para Kelvin
conversor.converter(25, "K");

// Conversão de 25 Celsius para Kelvin
conversor.converter(25, "C", "K");

// Conversão de 25 Celsius para Fahrenheit
conversor.converter(25, "C", "F");

// Conversão de 25 Fahrenheit para Kelvin
conversor.converter(25, "F", "K");

// Conversão de 25 Fahrenheit para Celsius
conversor.converter(25, "F", "C");

// Conversão de 40 Kelvin para Fahrenheit
conversor.converter(40, "K", "F");

// Conversão de 40 Kelvin para Celsius
conversor.converter(40, "K", "C");
