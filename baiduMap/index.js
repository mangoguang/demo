$(function(){
		// 百度地图API功能
	var map = new BMap.Map("l-map");          // 创建地图实例
	var tudes = [[113.640183,22.921871],[116.433694,39.727552]]
	var point = new BMap.Point(113.640183,22.921871);  // 创建点坐标
	var point1 = new BMap.Point(116.433694,39.727552);
	map.centerAndZoom(point, 15);                 // 初始化地图，设置中心点坐标和地图级别
	map.enableScrollWheelZoom();
	map.addControl(new BMap.NavigationControl());  //添加默认缩放平移控件   
	var myIcon = new BMap.Icon("./markers.png", new BMap.Size(32, 40), {  
    offset: new BMap.Size(0, 0), // 指定定位位置  
    imageOffset: new BMap.Size(0, -20) // 设置图片偏移  
  });
  var options = {  
            size: 6,  
            shape: 2,  
            color: '#d340c3'  
        };
	var marker = new BMap.Marker(point,{icon:myIcon});
	var marker1 =  new BMap.Marker(point1,{icon:myIcon});       // 创建标注    
	BMap.Marker.prototype.title = '点击气泡图。';
	marker.addEventListener('click', function (e) {
    alert('单击点的坐标为：' + e.point.lng + ',' + e.point.lat);  // 监听点击事件
  });
	map.addOverlay(marker); 
	// map.addOverlay(marker1); 

	var points = [];  // 添加海量点数据
  for (var i = 0; i < tudes.length; i++) {
    points.push(new BMap.Point(tudes[i][0], tudes[i][1]));
  }
	var pointCollection = new BMap.PointCollection(points, {icon:myIcon});
	pointCollection.addEventListener('click', function (e) {
    alert('单击点的坐标为：' + e.point.lng + ',' + e.point.lat);  // 监听点击事件
  });
  map.addOverlay(pointCollection);  // 添加Overlay
})