
$(document).ready(function() {
  $('.start_date').change(function() {
    var start_date = new Date($(this).val());
    var end_date = new Date(start_date);
    end_date.setDate(start_date.getDate() + 1);
    end_date = moment(end_date).format('YYYY-MM-DD');
    $('.end_date').val(end_date);
  });

  $('.page-link.action').click(function() {
    $('.page_num').val($(this).val());

    var url_params = new URLSearchParams(window.location.search);
    var search_text = url_params.get('search_text');

    if(search_text) {
      $('.search_form').submit();
    } else {
      $('.filter_form').submit();
    }

  }); 



});

$(function() {
  $('.date_range').daterangepicker({
    timePicker: false,
    locale: {
      format: "YYYY-MM-DD"
    }
  });
});

setTimeout(function() {
  $('.alert_msg').fadeOut();
}, 3000); // <-- time in milliseconds

$(function () {
  var table = $('#purchase_datatable').DataTable({
      // rowsGroup: [0, 3],
      scrollX:        true,
      scrollCollapse: true,
      fixedColumns:   {
          left: 4,
          right: 1
      },
      processing: true,
      serverSide: true,
      ajax: {
        url: "/purchasetable",
        data: {
          // "category_type": $('.category_type').val(),
          "date_range": $('.date_range').val(),
          // "shipment_status": $('.shipment_status').val(),
          // "delivery_status": $('.delivery_status').val(),
        }
      },
      'columnDefs': [{
         'targets': 0,
         'searchable': false,
         'orderable': false,
         'className': 'dt-body-center',
         'render': function (data, type, full, meta){
             return '<input type="checkbox" name="id[]" value="' + $('<div/>').text(data).html() + '">';
         }
      }],
      'order': [[1, 'desc']],
      columns: [

          {data: 'orderId', name: 'orderId'},
          {data: 'orderDate', name: 'orderDate'},
          {data: 'orderId', name: 'orderId'},
          {data: 'orderStatus', name: 'orderStatus'},
          {data: 'sku', name: 'sku'},
          {data: 'title', name: 'title'},
          {data: 'asin', name: 'asin'},
          {data: 'quantity', name: 'quantity'},
          {data: 'itemPrice', name: 'itemPrice'},
          {data: 'itemTax', name: 'itemTax'},
          {data: 'shippingPrice', name: 'shippingPrice'},
          {data: 'shippingTax', name: 'shippingTax'},
          {data: 'orderTotal', name: 'orderTotal'},  
          {data: 'action', name: 'action', orderable: false, searchable: false},     
      ]
  });

  // Handle click on "Select all" control
   $('#purchase-select-all').on('click', function(){
      // Get all rows with search applied
      var rows = table.rows({ 'search': 'applied' }).nodes();
      // Check/uncheck checkboxes for all rows in the table
      $('input[type="checkbox"]', rows).prop('checked', this.checked);
   });
   // Handle click on checkbox to set state of "Select all" control
   $('#purchase_datatable tbody').on('change', 'input[type="checkbox"]', function(){
      // If checkbox is not checked
      if(!this.checked){
         var el = $('#purchase-select-all').get(0);
         // If "Select all" control is checked and has 'indeterminate' property
         if(el && el.checked && ('indeterminate' in el)){
            // Set visual state of "Select all" control
            // as 'indeterminate'
            el.indeterminate = true;
         }
      }
   });

   $('#purchase_datatable').on('click', 'td.amazon-order', function (e) {
        e.preventDefault();
 
        editor.remove( $(this).closest('tr'), {
            title: 'Delete record',
            message: 'Are you sure you wish to remove this record?',
            buttons: 'Delete'
        } );
    } );
});