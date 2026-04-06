*** Settings ***
Library    SeleniumLibrary

*** Test Cases ***
Acessar Google com sucesso
    Open Browser    https://www.google.com    chrome
    Page Should Contain    Google
    Close Browser