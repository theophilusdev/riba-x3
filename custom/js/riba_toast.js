const ribaToast = (function(){
	let toastElementWrapper = document.createElement("div");

	document.body.appendChild(toastElementWrapper);


	const showSuccessToast = () => {

		let successToast = `<div class="toast" role="alert" aria-live="assertive" aria-atomic="true" id="success-toast-id" auto-hide='false'>
								  <div class="toast-header">
								    <img src="..." class="rounded me-2" alt="...">
								    <strong class="me-auto">Bootstrap</strong>
								    <small>11 mins ago</small>
								    <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
								  </div>
								  <div class="toast-body">
								    Hello, world! This is a toast message.
								  </div>
								</div>`;


		toastElementWrapper.innerHTML = successToast;



		const toastElement = document.querySelector("#success-toast-id");

		$("#success-toast-id").toast('show');




	}





	return {

		showSuccessToast: showSuccessToast


	}


}());