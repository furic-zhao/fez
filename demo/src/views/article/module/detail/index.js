import temp from './index.hbs';
import jumbotronTemp from './jumbotron.hbs';

import Service from './service';

import urlParam from 'public/utils/url-param';

export default ($box = $("body")) => {
    urlParam('id').then((data) => {
        return Service.renderData(data);
    }).then((data) => {
    	console.log(data);
        $box.html(temp(data));
        $("#js-jumbotron").html(jumbotronTemp(data));
    });
}
