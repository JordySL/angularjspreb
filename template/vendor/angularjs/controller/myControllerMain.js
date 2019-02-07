myApp.controller('myControllerMain', myControllerMain);
function myControllerMain($scope, $location, myService)
{
    var absUrl = $location.path();
    $scope.Screen = [ Mobil = false, 
                      Desktop = false ];
    Data();
    fixCardOnly();
    Screen();
    function fixCardOnly(){
        if(absUrl === "/lista"){
            console.log(absUrl);
        }
    }
    function Screen(){ 
        screen.width < 992 ? $scope.Screen[0] = true : $scope.Screen[1] = true; 
    }
    function Data(){
        var select = myService.select()
        .then(function(data) {
            $scope.data = data.data;
            return data;
        })
        .catch(function(errdata) {
            return errdata;
        });
        return select;
    }
    $scope.Carousel = function (x) { 
        var carousel = $('#myCarousel').on('slide.bs.carousel'); 
        x === 1 ? carousel.carousel('prev') : carousel.carousel('next'); 
    }
    $scope.SideBar = function(x) {
        if(x==1){
            $("#sidebar").mCustomScrollbar({
                theme: "minimal"
            });
            $('#sidebar').addClass('active');
            $('.overlay').addClass('active');
            $('.collapse.in').toggleClass('in');
            $('a[aria-expanded=true]').attr('aria-expanded', 'false');
        }else{
            $('#sidebar').removeClass('active');
            $('.overlay').removeClass('active');
        }
    }
};