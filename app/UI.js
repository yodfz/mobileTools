(function (_) {
    var $ui = {};

    $ui.message = {};


    $ui.message.alertSuccess = function (message,title) {
        var $moduleMessage = $("#uidemo-modals-alerts-success")[0];
        if ($moduleMessage == undefined) {
            //<div id="uidemo-modals-alerts-success" class="modal modal-alert modal-success fade in" aria-hidden="false" style="display: block;">
            //        <div class="modal-dialog">
            //        <div class="modal-content">
            //        <div class="modal-header">
            //        <i class="fa fa-check-circle"></i>
            //        </div>
            //        <div class="modal-title">Some alert title</div>
            //    <div class="modal-body">Some alert text</div>
            //    <div class="modal-footer">
            //        <button type="button" class="btn btn-success" data-dismiss="modal">OK</button>
            //        </div>
            //        </div> <!-- / .modal-content -->
            //    </div> <!-- / .modal-dialog -->
            //    </div>
            $("body").after('<div id="uidemo-modals-alerts-success" class="modal modal-alert modal-success fade">' +
                '<div class="modal-dialog">' +
                '<div class="modal-content">' +
                '    <div class="modal-header">' +
                '    <i class="fa fa-check-circle"></i>' +
                '    </div>' +
                '    <div class="modal-title"></div>' +
                '<div class="modal-body"></div>' +
                '<div class="modal-footer">' +
                '    <button type="button" class="btn btn-success" data-dismiss="modal">确定</button>' +
                '    </div>' +
                '    </div>' +
                '</div> ' +
                '</div>');
        }
        $moduleMessage = $($("#uidemo-modals-alerts-success")[0]);
        $moduleMessage.find(".modal-title").html(title||"");
        $moduleMessage.find(".modal-body").html(message);
        $moduleMessage.modal({keyboard: true, show: true});
    };

    $ui.message.alertDanger=function(message,title){
        var $moduleMessage = $("#uidemo-modals-alerts-danger")[0];
        if ($moduleMessage == undefined) {
            $("body").after('<div id="uidemo-modals-alerts-danger" class="modal modal-alert modal-danger fade">' +
                '<div class="modal-dialog">' +
                '<div class="modal-content">' +
                '    <div class="modal-header">' +
                '    <i class="fa fa-times-circle"></i>' +
                '    </div>' +
                '    <div class="modal-title"></div>' +
                '<div class="modal-body"></div>' +
                '<div class="modal-footer">' +
                '    <button type="button" class="btn btn-danger" data-dismiss="modal">确定</button>' +
                '    </div>' +
                '    </div>' +
                '</div> ' +
                '</div>');
        }
        $moduleMessage = $($("#uidemo-modals-alerts-danger")[0]);
        $moduleMessage.find(".modal-title").html(title||"");
        $moduleMessage.find(".modal-body").html(message);
        $moduleMessage.modal({keyboard: true, show: true});
    };

    _.UI = $ui;

}(window));