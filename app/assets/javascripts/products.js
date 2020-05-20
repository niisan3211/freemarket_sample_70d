  $(document).on('turbolinks:load', function(){

  const buildFileField = function(index){
    const html = `<div class="images_aera__addfiles">
                    <div class="images_aera__addfiles__file">
                      <div class="images_aera__addfiles__file__content">
                        <div data-image-index="${index}" class="js-file_group">
                          <input class="showing__images__file--js" type="file" name="product[images_attributes][${index}][image]" id="product_images_attributes_${index}_image">
                        </div>
                      </div>
                    </div>
                  </div>`;
    return html;
  }

  const buildImg = function(index, url){
    const html = `<img data-image-index="${index}" src="${url}" width="100px" height="100px">`;
    return html;
  }

  let fileIndex = [1,2,3,4,5,6,7,8,9,10];
  // 
  // 
  lastIndex = $('.js-file_group:last').data('index');
  fileIndex.splice(0, lastIndex);

  $('.hidden-destory').hide();
  // 
  // 

  $('#image-box').on('change', '.showing__images__file--js', function(e) {
    const targetIndex = $(this).parent().data('index');
    const file = e.target.files[0];
    const blobUrl = window.URL.createObjectURL(file);

    if (imag = $('img[data-image-index="${targetIndex}"]')[0]) {
      img.setAttribut('src', blobUrl);
    } else {
      $('#previews').append(buildImg(targetIndex, blobUrl));
      $('#image-box').append(buildFileField(fileIndex[0]));
      fileIndex.shift();
      fileIndex.push(fileIndex[fileIndex.length -1] +1);
    }
    // $('#image-box').append(buildFileField(fileIndex[0]));
    // fileIndex.shift();
    // fileIndex.push(fileIndex[fileIndex.length = 1] + 1)
  });

  // $('#image-box').on('change', '.images_aera__addfiless__file__delet', function() {
  //   $(this).parent().remove();
  //   if ($('.showing__images__file--js').length == 0) $('#image-box').append(buildFileField(fileIndex[0]));
  // });


  // 
  // 
  $('#image-box').on('click', '.images_aera__addfiless__file__delet', function(){
    const targetIndex = $(this).parent().data('index');
    const hiddenCheck = $('input[data-image-index="${targetIndex}"].hidden-destroy');
    if (hiddenCheck) hiddenCheck.prop('checked', true);

    $(this).parent().remove();
    $('img[data-image-index="${targetIndex}"]').remove();

    if ($('.showing__images__file--js').length == 0) $('#image-box').append(buildFileField(fileIndex[0]));
    // const targetIndex = $(this).parent().data('index')
    // const hiddenCheck = $('input[data-image-index="${targetIndex}"].hidden-destroy');
    // if (hiddenCheck) hiddenCheck.prop('checked', true);
  });
  // 
  // 

});
