$(document).on('turbolinks:load', function(){
  console.log("テスト");
  // const buildFileField = function(index){
  //   const html = `<div class="images_aera__addfiles">
  //                   <div class="images_aera__addfiles__file">
  //                     <div class="images_aera__addfiles__file__content">
  //                       <div data-image-index="${index}" class="js-file_group">
  //                         <input class="showing__images__file--js" type="file" name="product[images_attributes][${index}][image]" id="product_images_attributes_${index}_image">
  //                       </div>
  //                     </div>
  //                   </div>
  //                 </div>`;
  //   return html;
  // }

  // const buildImg = function(index, url){
  //   const html = `<img data-image-index="${index}" src="${url}" width="100px" height="100px">`;
  //   return html;
  // }

  // let fileIndex = [1,2,3,4,5,6,7,8,9,10];
  // // 
  // // 
  // lastIndex = $('.js-file_group:last').data('index');
  // fileIndex.splice(0, lastIndex);

  // $('.hidden-destory').hide();
  // // 
  // // 

  // $('#image-box').on('change', '.showing__images__file--js', function(e) {
  //   const targetIndex = $(this).parent().data('index');
  //   const file = e.target.files[0];
  //   const blobUrl = window.URL.createObjectURL(file);

  //   if (imag = $('img[data-image-index="${targetIndex}"]')[0]) {
  //     img.setAttribut('src', blobUrl);
  //   } else {
  //     $('#previews').append(buildImg(targetIndex, blobUrl));
  //     $('#image-box').append(buildFileField(fileIndex[0]));
  //     fileIndex.shift();
  //     fileIndex.push(fileIndex[fileIndex.length -1] +1);
  //   }
  // });

  // $('#image-box').on('click', '.images_aera__addfiless__file__delet', function(){
  //   const targetIndex = $(this).parent().data('index');
  //   const hiddenCheck = $('input[data-image-index="${targetIndex}"].hidden-destroy');
  //   if (hiddenCheck) hiddenCheck.prop('checked', true);

  //   $(this).parent().remove();
  //   $('img[data-image-index="${targetIndex}"]').remove();

  //   if ($('.showing__images__file--js').length == 0) $('#image-box').append(buildFileField(fileIndex[0]));
  // });



  // 
  // 
  // 
  // 
  let nextInput = (num, index)=> {
    let html = `<div class="up-image__group__dropbox" data-index="${num}" index="${index}">
                  <input class="item_imgs__default" type="file" multiple= "multiple" accept="image/*"></input>
                </div>`;
    return html; 
  }
  //プレビュー用のimgタグ
  let previewImages = (src)=> {   
    let html = `<div class="preview preview_unsave">
                  <div class="img_box">
                    <img src="${src}" class="preview_image"></div>
                  <div class="preview_btn">削除</div>
                </div>`;
    return html;
  }


  // 
  // 
  $(document).on('change','input[type= "file"]', function(e) {
    let reader = new FileReader();  //画像を読み込む
    let file = e.target.files[0];   //inputから1つ目のfileを取得
    reader.readAsDataURL(file);     //画像ファイルのURLを取得
  
    //画像読み込みが完了したらプレビュー表示
    reader.onload = function(e) {
      //imgタグ
      if ($('.preview').length <= 4) { 
        $('.previews').prepend(previewImages(e.target.result));
      } else {
        $('.previews_2nd_row').prepend(previewImages(e.target.result));
      }
      let preview_count = $('.preview').length;
      let preview_unsave_count = $('.preview_unsave').length;
      let preview_save_count = $('.preview_saved').length;
      let preview_saved_count = $('.hidden-destroy').length;
      let preview_sum = $('data-index').length;
      // データの入ったinputタグ
      if (preview_count <= 4) {
        $('.up-image__group__dropbox').removeClass('up-image__group__dropbox').addClass('image-preview').appendTo('.item_imgs');
        console.log("input11");
      } else {
        $('.up-image__group__dropbox').removeClass('up-image__group__dropbox').addClass('image-preview').appendTo('.item_imgs_2nd_row');
        console.log("input22");
      }
      //新しいinputタグを追加
      if (preview_count <= 4) {
        $('.item_imgs').prepend(nextInput(preview_count + 1, preview_unsave_count + 1));
      } else {
        $('.item_imgs_2nd_row').prepend(nextInput(preview_count + 1, preview_unsave_count + 1));
      }
      //プレビュー画像が５枚になったら１段目inputを消し、２段目にinputを表示
      if (preview_count == 5) {
        $('.item_imgs').css('display', 'none');
        $('.under_group').css('display', 'block');
        $('.item_imgs_2nd_row').css('display', 'block');
      }
      //プレビュー画像が10枚になったら2段目inputを消す
      if (preview_count == 10) {
        $('.item_imgs_2nd_row').css('display', 'none');
      }
      //識別のための管理番号をつけ直す
      $('.preview').each(function(i) {
        $(this).attr('data-index', (i+1));
      });
      $('.preview_unsave').each(function(i) {
        $(this).attr('index', (i+1));
      });
      $('.image-preview').each(function(i) {
        $(this).attr('index', (i+1));
        $(this).attr('data-index', (preview_save_count+i+1));
        $(this).children().attr('name', "item[item_imgs_attributes][" + (preview_saved_count+i) + "][src]");
        $(this).children().attr('data-index', (i+1));
      });
    }
  });

});
