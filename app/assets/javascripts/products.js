$(function(){
  let nextInput = function(index) {
    let html = `<label class="input_box">
                    <div class="input_box__upload" data-index="${index}">
                      <input class="input_box__upload__field" type="file" name="product[images_attributes][${index}][image]" id="product_images_attributes_${index}_image">
                      <i class="fas fa-camera fa-2x"></i>
                    </div>
                  </label>`;
    return html;
  }
  
  let previewImages = function(index, url) {
    let html = `<div class="previews__image">
                  <div class="previews__image__box">
                    <img data-image="{index:${index}}" src="${url}" width="100" height="100"></div>
                  <div class="previews__image__btn" data-btn-index="${index}">削除する</div>
                  <input class="hidden-destroy" type="checkbox" value="${index}" name="product[item_imgs][_destroy]" id="product_item_imgs__destroy">
                </div>`;
    return html;
  }


  let fileIndex = [1,2,3,4,5,6,7,8,9,10];
  lastIndex = $('.input_box__upload:last').data('index');
  fileIndex.splice(0, lastIndex);
  $('.hidden-destory').hide();
  

  $('.showing__images__file').on('change', '.input_box__upload', function(e){
    let targetIndex = $(this).data('index');

    let file = e.target.files[0];
    let blobUrl = window.URL.createObjectURL(file);
    let preview_count = $('.previews__image').length;

    if (img = $(`img[data-index="${targetIndex}"]`)[0]) {
      img.setAttribute('src', blobUrl);
    } else { 
    //   console.log(preview_count);
      $('.previews').prepend(previewImages(targetIndex, blobUrl));
      fileIndex.shift();
      fileIndex.push(fileIndex[fileIndex.length - 1] + 1);
      
      if (preview_count == 9) {
        $('.input_box').removeClass('input_box');
        $('.fas').removeClass('fas');
        $('.fa-camera').removeClass('fa-camera');  
      } else {
        $('.input_box').removeClass('input_box');
        $('.fas').removeClass('fas');
        $('.fa-camera').removeClass('fa-camera');
        $('.showing__images__file').append(nextInput(fileIndex[0]));
      }
    }
  });
  
  $('.showing__images__file').on('click', '.previews__image__btn', function(){

    let targetIndex = $(this).data('btn-index');

    let hiddenCheck = $(`input[value="${targetIndex}"].hidden-destroy`);
    console.log(hiddenCheck);
    if (hiddenCheck) hiddenCheck.prop('checked', true);

    $(this).parent().remove();
    $(`img[data-image="{index:${targetIndex}}"]`).remove();
    // $('#product_images_attributes_${targetIndex}_image').remove();

  //   if ($('.js-file').length == 0) $('#image-box').append(buildFileField(fileIndex[0]));
  });

});