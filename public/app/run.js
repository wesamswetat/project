/**
 * Created by Wesam on 10/31/2016.
 */

(function () {
    'use strict';
    var appRun = angular.module('alom');

    appRun.run(function (defaultErrorMessageResolver) {
        defaultErrorMessageResolver.getErrorMessages().then(function (errorMessages) {
            errorMessages['heightMax'] = 'גובה מקסיסאלי {0}';
            errorMessages['widthMax'] = 'רוחב מקסימאלי {0}';
            errorMessages['towChar'] = 'לפחות {0} ספרות';
            errorMessages['maxChar'] = 'מקסימום {0} ספרות';
            errorMessages['required'] = 'שדה זה חובה';
            errorMessages['email'] = 'אימייל לא חוקי';
            errorMessages['password'] = 'סיסמה לא חוקית לפחות {0} ';
        });
    })
})();
