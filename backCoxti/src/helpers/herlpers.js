const validateSalary = (salary) => {
    let valoresAceptados = /^[0-9]+$/;
    if (salary.match(valoresAceptados)) {
        return true
    } else {
        return false
    }
}

const getResponse = (options) => {
    let letraA
    let letraB
    let letraC
    let opcionCorrecta
    options.forEach(element => {
        if (element.letra === 'A') {
            letraA = element.rango
        }

        if (element.letra === 'B') {
            letraB = element.rango
        }

        if (element.letra === 'C') {
            letraC = element.rango
        }

        if (element.correcta) {
            opcionCorrecta = element.letra
        }
    });


    let response = {
        a: letraA,
        b: letraB,
        c: letraC,
        'response': opcionCorrecta
    }

    return response
}

const orderedOptions = (options) => {
    return options.sort((a, b) => {
        nameA = a.letra.toLowerCase()
        nameB = b.letra.toLowerCase()
        if (nameA < nameB) {
            return -1
        }

        if (nameA > nameB) {
            return 1
        }

        return 0

    })
}

const getRange = (salario) => {
    let flag = true
    let constRango3 = 0
    let constRango4 = 0
    let rango3 = 0
    let rango4 = 0
    while (flag) {
        let random1 = Math.floor(Math.random() * ((salario * 2) - (salario / 2))) + (salario / 2)
        let random2 = Math.floor(Math.random() * ((salario * 2) - (salario / 2))) + (salario / 2)
        if (constRango3 == 0 && parseInt(random1) < salario) {
            rango3 = parseInt(random1)
            constRango3 = constRango3 + 1
        }
        if (constRango4 == 0 && parseInt(random2) > salario) {
            rango4 = parseInt(random2)
            constRango4 = constRango4 + 1
        }
        if (constRango3 == 1 && constRango4 == 1) {
            flag = false
        }
    }

    return `${rango3} - ${rango4}`
}

const assignCharacter = (a, b, c) => {
    let letra = getCharacter()
    let rangos = []
    let contLetra = 0
    let flag = true
    let flag3 = true
    let flag4 = true
    rangos.push({ letra: letra, rango: a, correcta: false })
    while (flag) {
        let letra2 = getCharacter()
        rangos.forEach(element => {
            if (element.letra === letra2) {
                contLetra = contLetra + 1
            }
        });

        if (contLetra == 0 && flag3) {
            rangos.push({ letra: letra2, rango: b, correcta: true })
            contLetra = contLetra + 1
            flag3 = false
        }

        if (contLetra == 0 && flag4) {
            rangos.push({ letra: letra2, rango: c, correcta: false })
            flag4 = false
        }

        if (rangos.length === 3) {
            flag = false
        }
        contLetra = 0
    }

    return rangos
}

const getCharacter = () => {
    var result = '';
    var characters = 'ABC';
    var charactersLength = characters.length;
    for (var i = 0; i < 1; i++) {
        result = characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

module.exports = {
    validateSalary,
    getResponse,
    orderedOptions,
    getRange,
    assignCharacter
}