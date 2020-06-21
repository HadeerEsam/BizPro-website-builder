

window.addEventListener('load', function() {
    var editor;
    editor = ContentTools.EditorApp.get();
    editor.init('*[data-editable]', 'data-name');
    ContentTools.StylePalette.add([
        new ContentTools.Style('primary_color', 'primary_color', ['li','h3','p','h1','h2','h4','h5','h6','a','div']),new ContentTools.Style('info_color', 'info_color', ['li','h3','p','h1','h2','h4','h5','h6','a','div']),new ContentTools.Style('muted_color', 'muted_color', ['li','h3','p','h1','h2','h4','h5','h6','a','div']),new ContentTools.Style('white_color', 'white_color', ['li','h3','p','h1','h2','h4','h5','h6','a','div']),new ContentTools.Style('dark_color', 'dark_color', ['li','h3','p','h1','h2','h4','h5','h6','a','div']),new ContentTools.Style('light_color', 'light_color', ['li','h3','p','h1','h2','h4','h5','h6','a','div']),new ContentTools.Style('success_color', 'success_color', ['li','h3','p','h1','h2','h4','h5','h6','a','div']),new ContentTools.Style('warning_color', 'warning_color', ['li','h3','p','h1','h2','h4','h5','h6','a','div']),new ContentTools.Style('danger_color', 'danger_color',  ['li','h3','p','h1','h2','h4','h5','h6','a','div']), new ContentTools.Style('bg_primary', 'bg_primary', ['li','h3','p','h1','h2','h4','h5','h6','a','div']),new ContentTools.Style('bg_info', 'bg_info', ['li','h3','p','h1','h2','h4','h5','h6','a','div']),new ContentTools.Style('bg_muted', 'bg_muted', ['li','h3','p','h1','h2','h4','h5','h6','a','div']),new ContentTools.Style('bg_white', 'bg_white', ['li','h3','p','h1','h2','h4','h5','h6','a','div']),new ContentTools.Style('bg_dark', 'bg_dark', ['li','h3','p','h1','h2','h4','h5','h6','a','div']),new ContentTools.Style('bg_light', 'bg_light', ['li','h3','p','h1','h2','h4','h5','h6','a','div']),new ContentTools.Style('bg_success', 'bg_success', ['li','h3','p','h1','h2','h4','h5','h6','a','div']),new ContentTools.Style('bg_warning', 'bg_warning', ['li','h3','p','h1','h2','h4','h5','h6','a','div']),new ContentTools.Style('bg_danger', 'bg_danger',  ['li','h3','p','h1','h2','h4','h5','h6','a','div']),new ContentTools.Style('py-5', 'py-5',  ['li','h3','p','h1','h2','h4','h5','h6','a','div']),new ContentTools.Style('py-4', 'py-4',  ['li','h3','p','h1','h2','h4','h5','h6','a','div']),new ContentTools.Style('py-3', 'py-3',  ['li','h3','p','h1','h2','h4','h5','h6','a','div']),new ContentTools.Style('py-2', 'py-2',  ['li','h3','p','h1','h2','h4','h5','h6','a','div']),new ContentTools.Style('py-1', 'py-1',  ['li','h3','p','h1','h2','h4','h5','h6','a','div']),new ContentTools.Style('py-0', 'py-0',  ['li','h3','p','h1','h2','h4','h5','h6','a','div']),new ContentTools.Style('px-5', 'px-5',  ['li','h3','p','h1','h2','h4','h5','h6','a','div']),new ContentTools.Style('px-4', 'px-4',  ['li','h3','p','h1','h2','h4','h5','h6','a','div']),new ContentTools.Style('px-3', 'px-3',  ['li','h3','p','h1','h2','h4','h5','h6','a','div']),new ContentTools.Style('px-2', 'px-2',  ['li','h3','p','h1','h2','h4','h5','h6','a','div']),new ContentTools.Style('px-1', 'px-1',  ['li','h3','p','h1','h2','h4','h5','h6','a','div']),new ContentTools.Style('px-0', 'px-0',  ['li','h3','p','h1','h2','h4','h5','h6','a','div']),new ContentTools.Style('mx-0', 'mx-0',  ['li','h3','p','h1','h2','h4','h5','h6','a','div']),new ContentTools.Style('mx-1', 'mx-1',  ['li','h3','p','h1','h2','h4','h5','h6','a','div']),new ContentTools.Style('mx-2', 'mx-2',  ['li','h3','p','h1','h2','h4','h5','h6','a','div']),new ContentTools.Style('mx-3', 'mx-3',  ['li','h3','p','h1','h2','h4','h5','h6','a','div']),new ContentTools.Style('mx-4', 'mx-4',  ['li','h3','p','h1','h2','h4','h5','h6','a','div']),new ContentTools.Style('mx-5', 'mx-5',  ['li','h3','p','h1','h2','h4','h5','h6','a','div']),new ContentTools.Style('m-auto', 'm-auto',  ['li','h3','p','h1','h2','h4','h5','h6','a','div']),new ContentTools.Style('my-0', 'my-0',  ['li','h3','p','h1','h2','h4','h5','h6','a','div']),new ContentTools.Style('my-1', 'my-1',  ['li','h3','p','h1','h2','h4','h5','h6','a','div']),new ContentTools.Style('my-2', 'my-2',  ['li','h3','p','h1','h2','h4','h5','h6','a','div']),new ContentTools.Style('my-3', 'my-3',  ['li','h3','p','h1','h2','h4','h5','h6','a','div']),new ContentTools.Style('my-4', 'my-4',  ['li','h3','p','h1','h2','h4','h5','h6','a','div']),new ContentTools.Style('my-5', 'my-5',  ['li','h3','p','h1','h2','h4','h5','h6','a','div']),new ContentTools.Style('w-25', 'w-25',  ['h3','p','h1','h2','h4','h5','h6','a','div','img','iframe']),new ContentTools.Style('w-50', 'w-50',  ['h3','p','h1','h2','h4','h5','h6','a','div','img','iframe']),new ContentTools.Style('w-75', 'w-75',  ['h3','p','h1','h2','h4','h5','h6','a','div','img','iframe']),new ContentTools.Style('w-100', 'w-100',  ['h3','p','h1','h2','h4','h5','h6','a','div','img','iframe']),new ContentTools.Style('h-25', 'h-25',  ['h3','p','h1','h2','h4','h5','h6','a','div','img','iframe']),new ContentTools.Style('h-50', 'h-50',  ['h3','p','h1','h2','h4','h5','h6','a','div','img','iframe']),new ContentTools.Style('h-75', 'h-75',  ['h3','p','h1','h2','h4','h5','h6','a','div','img','iframe']),new ContentTools.Style('h-100', 'h-100',  ['h3','p','h1','h2','h4','h5','h6','a','div','img','iframe']),new ContentTools.Style('font_sm', 'font_sm',  ['li','h3','p','h1','h2','h4','h5','h6','a','div']),new ContentTools.Style('font_md', 'font_md',  ['li','h3','p','h1','h2','h4','h5','h6','a','div']),new ContentTools.Style('font_lg', 'font_lg',  ['li','h3','p','h1','h2','h4','h5','h6','a','div']),new ContentTools.Style('font_xlg', 'font_xlg',  ['li','h3','p','h1','h2','h4','h5','h6','a','div'])
    ]);
     
//     function imageUploader(dialog) {
//         var image, xhr, xhrComplete, xhrProgress;
   
//        // Set up the event handlers

//        dialog.addEventListener('imageuploader.cancelupload', function () {
//         // Cancel the current upload

//         // Stop the upload
//         if (xhr) {
//             xhr.upload.removeEventListener('progress', xhrProgress);
//             xhr.removeEventListener('readystatechange', xhrComplete);
//             xhr.abort();
//         }

//         // Set the dialog to empty
//         dialog.state('empty');
//       });
//        dialog.addEventListener('imageuploader.clear', function () {
//         // Clear the current image
//             dialog.clear();
//             image = null;
//         });

//         dialog.addEventListener('imageuploader.fileready', function (ev) {

//             // Upload a file to the server
//             var formData;
//             var file = ev.detail().file;
    
//             // Define functions to handle upload progress and completion
//             xhrProgress = function (ev) {
//                 // Set the progress for the upload
//                 dialog.progress((ev.loaded / ev.total) * 100);
//             }
    
//             xhrComplete = function (ev) {
//                 var response;
    
//                 // Check the request is complete
//                 if (ev.target.readyState != 4) {
//                     return;
//                 }
    
//                 // Clear the request
//                 xhr = null
//                 xhrProgress = null
//                 xhrComplete = null
    
//                 // Handle the result of the upload
//                 if (parseInt(ev.target.status) == 200) {
//                     // Unpack the response (from JSON)
//                     response = JSON.parse(ev.target.responseText);
    
//                     // Store the image details
//                     image = {
//                         size: response.size,
//                         url: response.url
//                         };
    
//                     // Populate the dialog
//                     dialog.populate(image.url, image.size);
    
//                 } else {
//                     // The request failed, notify the user
//                     new ContentTools.FlashUI('no');
//                 }
//             }
    
//             // Set the dialog state to uploading and reset the progress bar to 0
//             dialog.state('uploading');
//             dialog.progress(0);
    
//             // Build the form data to post to the server
//             formData = new FormData();
//             formData.append('image', file);
    
//             // Make the request
//             xhr = new XMLHttpRequest();
//             xhr.upload.addEventListener('progress', xhrProgress);
//             xhr.addEventListener('readystatechange', xhrComplete);
//             xhr.open('POST', '/upload-image', true);
//             xhr.send(formData);
//         });

//         function rotateImage(direction) {
//             // Request a rotated version of the image from the server
//             var formData;
    
//             // Define a function to handle the request completion
//             xhrComplete = function (ev) {
//                 var response;
    
//                 // Check the request is complete
//                 if (ev.target.readyState != 4) {
//                     return;
//                 }
    
//                 // Clear the request
//                 xhr = null
//                 xhrComplete = null
    
//                 // Free the dialog from its busy state
//                 dialog.busy(false);
    
//                 // Handle the result of the rotation
//                 if (parseInt(ev.target.status) == 200) {
//                     // Unpack the response (from JSON)
//                     response = JSON.parse(ev.target.responseText);
    
//                     // Store the image details (use fake param to force refresh)
//                     image = {
//                         size: response.size,
//                         url: response.url + '?_ignore=' + Date.now()
//                         };
    
//                     // Populate the dialog
//                     dialog.populate(image.url, image.size);
    
//                 } else {
//                     // The request failed, notify the user
//                     new ContentTools.FlashUI('no');
//                 }
//             }
    
//             // Set the dialog to busy while the rotate is performed
//             dialog.busy(true);
    
//             // Build the form data to post to the server
//             formData = new FormData();
//             formData.append('url', image.url);
//             formData.append('direction', direction);
    
//             // Make the request
//             xhr = new XMLHttpRequest();
//             xhr.addEventListener('readystatechange', xhrComplete);
//             xhr.open('POST', '/rotate-image', true);
//             xhr.send(formData);
//         }
    
//         dialog.addEventListener('imageuploader.rotateccw', function () {
//             rotateImage('CCW');
//         });
    
        
//         dialog.addEventListener('imageuploader.save', function () {
//             var crop, cropRegion, formData;
    
//             // Define a function to handle the request completion
//             xhrComplete = function (ev) {
//                 // Check the request is complete
//                 if (ev.target.readyState !== 4) {
//                     return;
//                 }
    
//                 // Clear the request
//                 xhr = null
//                 xhrComplete = null
    
//                 // Free the dialog from its busy state
//                 dialog.busy(false);
    
//                 // Handle the result of the rotation
//                 if (parseInt(ev.target.status) === 200) {
//                     // Unpack the response (from JSON)
//                     var response = JSON.parse(ev.target.responseText);
    
//                     // Trigger the save event against the dialog with details of the
//                     // image to be inserted.
//                     dialog.save(
//                         response.url,
//                         response.size,
//                         {
//                             'alt': response.alt,
//                             'data-ce-max-width': response.size[0]
//                         });
    
//                 } else {
//                     // The request failed, notify the user
//                     new ContentTools.FlashUI('no');
//                 }
//             }
    
//             // Set the dialog to busy while the rotate is performed
//             dialog.busy(true);
    
//             // Build the form data to post to the server
//             formData = new FormData();
//             formData.append('url', image.url);
    
//             // Set the width of the image when it's inserted, this is a default
//             // the user will be able to resize the image afterwards.
//             formData.append('width', 600);
    
//             // Check if a crop region has been defined by the user
//             if (dialog.cropRegion()) {
//                 formData.append('crop', dialog.cropRegion());
//             }
    
//             // Make the request
//             xhr = new XMLHttpRequest();
//             xhr.addEventListener('readystatechange', xhrComplete);
//             xhr.open('POST', '/insert-image', true);
//             xhr.send(formData);
//         });      
       
//    }
//    ContentTools.IMAGE_UPLOADER = imageUploader;
   

    
//     editor.addEventListener('saved', function (ev) {
//         var name, onStateChange, passive, payload, regions, xhr;
    
//         // Check if this was a passive save
//         passive = ev.detail().passive;
    
//         // Check to see if there are any changes to save
//         regions = ev.detail().regions;
//         if (Object.keys(regions).length == 0) {
//             return;
//         }
    
//         // Set the editors state to busy while we save our changes
//         this.busy(true);
    
//         // Collect the contents of each region into a FormData instance
//         payload = new FormData();
//         payload.append('__page__', window.location.pathname);
//         for (name in regions) {
//             payload.append(name, regions[name]);
//         }
    
//         // Send the update content to the server to be saved
//         onStateChange = function(ev) {
//             // Check if the request is finished
//             if (ev.target.readyState == 4) {
//                 editor.busy(false);
//                 if (ev.target.status == '200') {
//                     // Save was successful, notify the user with a flash
//                     if (!passive) {
//                         new ContentTools.FlashUI('ok');
//                     }
//                 } else {
//                     // Save failed, notify the user with a flash
//                     new ContentTools.FlashUI('no');
//                 }
//             }
//         };
    
//         xhr = new XMLHttpRequest();
//         xhr.addEventListener('readystatechange', onStateChange);
//         xhr.open('GET', '/save-page');
//         xhr.send(payload);
//     });
});
