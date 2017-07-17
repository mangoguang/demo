$(function(){
		// 百度地图API功能
	var map = new BMap.Map("l-map");          // 创建地图实例
	map.centerAndZoom(new BMap.Point(113.751765,23.020536), 12);                 // 初始化地图，设置中心点坐标和地图级别
	map.enableScrollWheelZoom();
	map.addControl(new BMap.NavigationControl());  //添加默认缩放平移控件   
	var myIcon = new BMap.Icon("./markers.png", new BMap.Size(32, 40), {  
    offset: new BMap.Size(0, 0), // 指定定位位置  
    imageOffset: new BMap.Size(0, 0) // 设置图片偏移  
  });
  var ajaxData = {
    jingdu: 113.751765,
    weidu: 23.020536
  }
	var url='http://zs.derucci.net/deruccimid/sleep/findcusinfo';
	getData(url, ajaxData).then(function(json) {
		var arr = json.datas;
		console.log(arr);
		for(var i=0;i<arr.length;i++){
			var point = new BMap.Point(arr[i].LONGITUDE,arr[i].LATITUDE);  // 创建点坐标
			var marker = new BMap.Marker(point,{icon:myIcon,title:'爱慕工业园~guang'});
			marker.addEventListener('click', function (e) {
				console.log(e);
				console.log(e.currentTarget.z.title);
		  });
		  map.addOverlay(marker); 
		}
	})
 

	// var points = [];  // 添加海量点数据
 //  for (var i = 0; i < tudes.length; i++) {
 //    points.push(new BMap.Point(tudes[i][0], tudes[i][1]));
 //  }
	// var pointCollection = new BMap.PointCollection(points, {icon:myIcon});
	// pointCollection.addEventListener('click', function (e) {
 //    alert('单击点的坐标为：' + e.point.lng + ',' + e.point.lat);  // 监听点击事件
 //  });
 //  map.addOverlay(pointCollection);  // 添加Overlay
})

function getData(url, ajaxData) {
  var data = new Promise(function(resolve, reject) {
      $.ajax({
          type: 'post',
          url: url,
          dataType: 'jsonp',
          jsonp: "jsoncallback",
          data: ajaxData,
          success: function(data) {
            resolve(data);
          },
          error: function(data) {
            alert('网络异常，数据获取失败。');
          }
      });
  });
  return data;
}