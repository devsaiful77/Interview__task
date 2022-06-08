class Notification{

    success(){
        new Noty({
            type: 'string',
            text: 'Successfully Done',
            layout: 'topRight',
            timeout: 1000,
        }).show();
    }

    alert(){
        new Noty({
            type: 'alert',
            text: 'Are You Sure',
            layout: 'topRight',
            timeout: 1000,
        }).show();
    }

    error(){
        new Noty({
            type: 'alert',
            text: 'Something Went Wrong',
            layout: 'topRight',
            timeout: 1000,
        }).show();
    }

    warning(){
        new Noty({
            type: 'warning',
            text: 'Opps Wrong',
            layout: 'topRight',
            timeout: 1000,
        }).show();
    }

    image_validation(){
        new Noty({
            type: 'error',
            text: 'Upload Image less then 1MB',
            layout: 'topRight',
            timeout: 1000,
        }).show();
    }

}

export default Notification = new Notification()
