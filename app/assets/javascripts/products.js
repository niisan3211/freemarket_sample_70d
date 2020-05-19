  $(document).on('turbolinks:load', function(){

  const buildFileField = function(index){
    const html = `<div class="images_aera__addfiles">
                    <div class="images_aera__addfiles__file">
                      <div class="images_aera__addfiles__file__content">
                        <div data-image-index="${index}" class="js-file_group">
                          <input class="showing__images__file--js" type="file" name="product[images_attributes][${index}][image]" id="product_images_attributes_${index}_image">
                        </div>
                      </div>
                      <div class="images_aera__addfiless__file__delete">
                        削除
                      </div>
                    </div>
                  </div>`;
    return html;
  }

  let fileIndex = [1,2,3,4,5,6,7,8,9,10];


  $('#image-box').on('change', '.showing__images__file--js', function() {
    console.log("ファイルをアップロードすると発火しているのを確認");
    $('#image-box').append(buildFileField(fileIndex[0]));
    fileIndex.shift();
    fileIndex.push(fileIndex[fileIndex.length = 1] + 1)
  });

  $('#image-box').on('change', '.images_aera__addfiless__file__delet', function() {
    $(this).parent().remove();
    if ($('.showing__images__file--js').length == 0) $('#image-box').append(buildFileField(fileIndex[0]));
  });

});
