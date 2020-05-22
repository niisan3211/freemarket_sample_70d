$(function(){
  console.log("ロード");
  let nextInput = function(index) {
    let html = `<label class="input_box">
                    <div class="input_box__upload">
                      <input class="input_box__upload__field" type="file" name="product[images_attributes][${index}][image]" id="product_images_attributes_${index}_image">
                      <i class="fas fa-camera fa-2x"></i>
                    </div>
                  </label>`;
    return html;
  }

  let previewImages = function(index, url) {
    let html = `<div class="previews__image">
                  <div class="previews__image__box">
                    <img data-image-index="${index}" src="${url}" width="100" height="100"></div>
                  <div class="previews__image__btn">削除する</div>
                </div>`;
    return html;
  }


  let fileIndex = [1,2,3,4,5,6,7,8,9,10];
  lastIndex = $('.input_box__upload__field:last').data('index');
  fileIndex.splice(0, lastIndex);

  $('.hidden-destory').hide();
  

  $('.showing__images__file').on('change', '.input_box__upload__field', function(e){
    let targetIndex = $('.input_box__upload').parent().data('index');
    console.log(targetIndex);
    let file = e.target.files[0];
    let blobUrl = window.URL.createObjectURL(file);

    if (img = $(`img[data-index="${targetIndex}"]`)[0]) {
      img.setAttribute('src', blobUrl);
    } else {  // 新規画像追加の処理


      $('.previews').prepend(previewImages(targetIndex, blobUrl));
      fileIndex.shift();
      fileIndex.push(fileIndex[fileIndex.length - 1] + 1);
      $('.input_box').removeClass('input_box');
      $('.fas').removeClass('fas');
      $('.fa-camera').removeClass('fa-camera');
      $('.showing__images__file').append(nextInput(fileIndex[0]));
      console.log('投稿発火');
    }
  });
  

});