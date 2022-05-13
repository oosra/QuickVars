# Created by @oosra (https://oosra.github.io/) for https://github.com/oosra/QuickVars

class custom_var_list:
    # Creates variable list when class created
    def __init__(self):
        self.dict = {}

    # Creates variable if nonexistant
    def define(self, name, value):
        if not name in self.dict:
            self.dict[str(name)] = value
            return True, "define:success-Empty data range"

        else:
            return False, "define:fail-Taken data range"

    # Deletes preëxisting variable
    def delete(self, name):
        if name in self.dict:
            del self.dict[name]
            return True, "delete:success-Valid data range"

        else:
            return False, "delete:fail-Invalid data range"

    # Obtains value of existing variable
    def grab(self, name):
        if name in self.dict:
            var_surround = ""
            if isinstance(self.dict[name], str):
                var_surround = "\""

            print(" > {} = {}{}{}".format(name, var_surround, self.dict[name], var_surround))
            return True, "grab:success-Existing data"

        else:
            return False, "grab:fail-Nonexistant data"

    # Lists entire variable list
    def list(self):
        for key, value in self.dict.items():
            var_surround = ""
            if isinstance(value, str):
                var_surround = "\""

            print(" > {} = {}{}{}".format(key, var_surround, value, var_surround))

        if len(self.dict) == 0:
            print(" > No variables stored in this object")

        return True, "list:success-Impossible to fail"
    
    # Changes the value of existing variable
    def modify(self, name, value):
        if name in self.dict:
            self.dict[name] = value
            return True, "modify:success-Valid data range"

        else:
            return False, "modify:fail-Invalid data range"