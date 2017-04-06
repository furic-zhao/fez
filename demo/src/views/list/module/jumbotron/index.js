import temp from './index.hbs'

import Service from './service'

import $ from 'jquery'

export default ($box = $("body")) => {
	Service.renderData().then((data) => {
		$box.html(temp(data))
	})
}
