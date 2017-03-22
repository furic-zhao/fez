import temp from './header.hbs';

import Service from './service';

import Q from 'q';

export default ($box = $("body")) => {
    let tempData = {};

    Q.all([
        Service.siteName(),
        Service.navList()
    ]).then((data) => {
        tempData.sysName = data[0];
        tempData.nav = data[1];

        $box.html(temp(tempData));
    });
}
