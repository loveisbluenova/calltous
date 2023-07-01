
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
  var table = $('#shipment_datatable').DataTable({
      scrollX:        true,
      scrollCollapse: true,
      fixedColumns:   {
          left: 2
      },
      processing: true,
      serverSide: true,
      ajax: {
        url: "/customer",
        data: {
          "category_type": $('.category_type').val(),
          "date_range": $('.date_range').val(),
          "shipment_status": $('.shipment_status').val(),
          "delivery_status": $('.delivery_status').val(),
        }
      },

      columns: [
          {data: 'orderDate', name: 'orderDate'},
          {data: 'orderId', name: 'orderId'},
          {data: 'orderStatus', name: 'orderStatus'},
          {data: 'buyerGroupName', name: 'buyerGroupName'},
          {data: 'shipmentDate', name: 'shipmentDate'},
          {data: 'shipmentStatus', name: 'shipmentStatus'},
          {data: 'carrierTracking', name: 'carrierTracking'},
          {data: 'expectedDeliveryDate', name: 'expectedDeliveryDate'},
          {data: 'deliveryStatus', name: 'deliveryStatus'},
          {data: 'carrierName', name: 'carrierName'},
          {data: 'productCategory', name: 'productCategory'},
          {data: 'asin', name: 'asin'},
          {data: 'title', name: 'title'},
          {data: 'unspsc', name: 'unspsc'},
          {data: 'productCondition', name: 'productCondition'},
          {data: 'itemQuantity', name: 'itemQuantity'},
          {data: 'itemSubTotal', name: 'itemSubTotal'},
          {data: 'itemShippingAndHandling', name: 'itemShippingAndHandling'},
          {data: 'itemPromotion', name: 'itemPromotion'},
          {data: 'itemTax', name: 'itemTax'},
          {data: 'itemNetTotal', name: 'itemNetTotal'},
          {data: 'purchaseOrderLineItem', name: 'purchaseOrderLineItem'},
          {data: 'taxExemptionApplied', name: 'taxExemptionApplied'},
          {data: 'taxExemptionType', name: 'taxExemptionType'},
          {data: 'taxExemptOptOut', name: 'taxExemptOptOut'},
          {data: 'discountProgram', name: 'discountProgram'},
          {data: 'sellerName', name: 'sellerName'},
          {data: 'sellerCity', name: 'sellerCity'},
          {data: 'sellerState', name: 'sellerState'},
          {data: 'sellerPostalCode', name: 'sellerPostalCode'},
          {data: 'sellerCredentials', name: 'sellerCredentials'},
          {data: 'brandCode', name: 'brandCode'},
          {data: 'brandName', name: 'brandName'},
          {data: 'manufacturerName', name: 'manufacturerName'},
          {data: 'received', name: 'received'},
          {data: 'received_date', name: 'received_date'},
      ],
      
      rowsGroup: [0, 1],
      order:[[0, 'desc'], [1, 'asc']],
      // orderFixed: [[0, 'desc']],
      

  });
});