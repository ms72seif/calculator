let sum = "";
    let _res = document.getElementById('dsp');
    let _yNm = document.getElementById('dsp1');
    function _calc(e){
        sum+=e;
        _yNm.value=sum;
    }
    function _backspace(){
    sum =sum.substr(0,sum.length - 1);
    _yNm.value=sum;
        if(_res.value!=""){
            _res.value=""
        }
    }
    function _reset(){
        _yNm.value="";
        _res.value="";
        sum=""
    }
    function _result(){
        if(_yNm.value!=""){
            _res.value = eval(sum);
        }else{
            alert('please enter number')
        }
    }
