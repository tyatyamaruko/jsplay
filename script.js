const Alert = {
    show($msg) {
        alert($msg);
    }
}

const Modal = {
    show(tag) {
        $target = $(tag);
        $('.modal').css('display', 'block');
        $('.text').text($target.attr('id'));
    },

    dismiss() {
        $('.modal').css('display', 'none');
    }
}


const Accordion = {
    toggle(target) {
        $target = $(target);
        $target.next('p').slideToggle();
    }
}