// Created by @oosra (https://oosra.github.io/) for https://github.com/oosra/QuickVars

class customVarList {
    // Creates variable list when class created
    constructor() {
        this.dict = {};
    }

    // Creates variable if nonexistant
    define(name, value) {
        if (!(name in this.dict)) {
            this.dict[name.toString()] = value;
            return true, "define:success-Empty data range";
        } else {
            return false, "define:fail-Taken data range";
        }
    }

    // Deletes preëxisting variable
    delete(name) {
        if (name in this.dict) {
            delete this.dict[name];
            return true, "delete:success-Valid data range";
        } else {
            return false, "delete:fail-Invalid data range";
        }
    }

    // Obtains value of existing variable
    grab(name) {
        if (name in this.dict) {
            var varSurround = "";
            if (typeof this.dict[name] == "string") {
                varSurround = "\"";
            }
            console.log(` > ${name} = ${varSurround}${this.dict[name]}${varSurround}`);
            return true, "grab:success-Existing data";
        } else {
            return false, "grab:fail-Nonexistant data";
        }
    }

    // Lists entire variable list
    list() {
        for (const [key, value] of Object.entries(this.dict)) {
            var varSurround = "";
            if (typeof value == "string") {
                varSurround = "\"";
            }
            console.log(` > ${key} = ${varSurround}${value}${varSurround}`);
        }
        if (Object.keys(this.dict).length == 0) {
            console.log(" > No variables stored in this object");
        }
        return true, "list:success-Impossible to fail";
    }

    // Changes the value of existing variable
    modify(name, value) {
        if (name in this.dict) {
            this.dict[name] = value;
            return true, "modify:success-Valid data range";
        } else {
            return false, "modify:fail-Invalid data range";
        }
    }
}