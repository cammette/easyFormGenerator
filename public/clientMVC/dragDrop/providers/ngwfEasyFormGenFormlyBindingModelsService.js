/**
 *  ------------------------------------------------------
 *  provider : EasyFormGenFormlyBindingModels
 *  ------------------------------------------------------
 *
 *  configure all related to bing model (easy form generator - formly)
 * 
 * ——————————————————————————————————————————————
 * MIT (2015) - Erwan Datin (MacKentoch)
 * https://github.com/MacKentoch/easyFormGenerator
 * ——————————————————————————————————————————————
**/
angular
	.module('ngwfApp.providers.EasyFormGenFormlyBindingModels', [])
	.provider('EasyFormGenFormlyBindingModels', [

	function(){ 
		
		/**
		 * define all controls easy form genearator will manage
		 */
		var _easyFormListControls =	{

	                    controls : [],

	                      selectedControl : 'none' ,
	                      temporyConfig : {
	                                        selectedControl		: 'none',
	                                        formlyLabel				: 'label', 
	                                        formlyRequired		: false, 
	                                        formlyDesciption	: '',
	                                        formlyPlaceholder	: '',
	                                        formlyOptions 		: []
	                                      } 
		};

		/**
		 * formly field model (back model = configuration model)
		 * at initial state (1 line empty)
		 *
		 * If need a configuration before loading from database 
		 * or loading from saved object better use _easyFormReloadConfigurationModel 
		 */
		var _easyFormInitialStateConfigurationModel =  {                                
	    /**
	     * commun all easy form generator ways	
	     */
	    submitButtonText 	: 'submit',
	    cancelButtonText 	: 'cancel',
	    lines : [
	            {
	              line 					: 1,                                       
	              activeColumn 	: 1,
	              columns 			: [
	                                {  
	                                  numColumn 	: 1,
	                                  exist 			:true, 
	                                  control 		: {
	                                                  type:'none',
	                                                  key: 'none',
	                                                  // templateOptions: {
	                                                  //                     label: 'none',
	                                                  //                     placeholder: 'none',
	                                                  //                     required: false,
	                                                  //                     description: 'Descriptive text'
	                                                  //                   }
	                                                }
	                                  }
	                               ]
	             }                                 
	        ]
    };

    var _easyFormInitialStateConfigurationModelAddOnForStepWay = {
			/**
			 * specific easy form generator — step way — (not drag and drop way), needed for wizard management
			 */
	    activeLine 			: 1,   
	    listConfigStep 	: [
	                        'init',
	                        'first',
	                        'second',
	                        'third'
	                  		],
	    stepIndicators 	: [
	                        true,
	                        false,
	                        false,
	                        false
	                      ], 
	    configStepCounter : 0,     	
    };	


    var _easyFormReloadConfigurationModel =  {                                
	    /**
	     * commun all easy form generator ways	
	     *
	     * this model when loading as initial state 
	     * -> when then loading a previous configuration
	     * i.e. : loading from database
	     *
	     * If need a model for intitial state (without loadin data)
	     * better use _easyFormInitialStateConfigurationModel
	     */
	    submitButtonText 	: 'submit',
	    cancelButtonText 	: 'cancel',
	    lines : []
    };

    var _headerTemplates = 	{
    													cssClass 		: ['col-md-12', 'col-md-6', 'col-md-4'],
    													textContent : '',
    													html 				: [
		                                          '<div class="row">',
		                                          '  <div class="">',
		                                          '    <h2 class="text-center">', 
		                                               this.textContent,
		                                          '    <h2>',
		                                          '    <hr/>',
		                                          '  </div>',
		                                          '</div>'
		                                         ].join()
    												};

    var _formlyControlTemplates =	{
		                                className : ['col-xs-12', 'col-xs-6', 'col-xs-4'],
		                                type      : '',
		                                key       : '',
		                                templateOptions: {
		                                    type        : '',
		                                    label       : '',
		                                    required    : '',
		                                    placeholder : '',
		                                    description : '',
		                                    options     : ''    
		                                }
		                              };

		var _particularControlProperties = 	[
																					{
																						controlType 	: 'datepicker',
																						properties 		: ['templateOptions.datepickerPopup']
																					}
																				];



		this.getAllParticularControlProperties = function(){
			/**
			 * 
			 */
			return _particularControlProperties;
		};

		this.addParticularControlProperties = function(newParticularControlProperty){
			/**
			 * test object param has waited properties
			 */
			if (('controlType' 	in newParticularControlProperty) &&
					('properties' 	in newParticularControlProperty)) {
				/**
				 * test controlType does not already exists
				 *
				 * here will update properties (correponding controlType) if already exists
				 */
				var isAnUpdate = false;
				if ( _particularControlProperties.length > 0 ) {

					_particularControlProperties.forEach(function(controlProp){

						if (controlProp.controlType === newParticularControlProperty.controlType) {
							controlProp.properties = [].concat(newParticularControlProperty.properties);
							isAnUpdate = true;
						}	
							
					});
				}
				/**
				 * it is no update so ; add newParticularControlProperty
				 */
				if (!isAnUpdate) {

					_particularControlProperties.push(newParticularControlProperty);

				}
				
			}

			return _particularControlProperties;			
		};





		this.getEasyFormListControls = function(){
			/**
			 * 
			 */
			return _easyFormListControls;
		};

		this.addEasyFormControlToList = function(controlDeclaration){
			if (typeof controlDeclaration !== 'undefined'){
				_easyFormListControls.controls.push(controlDeclaration);
			}
		};



		this.getHeaderTemplates = function(){
			/**
			 * 
			 */
			return _headerTemplates;
		};

		this.addHeaderTemplateCssClass = function(cssClassToAdd){
			if (typeof cssClassToAdd !== 'undefined') {
				_headerTemplates.cssClass.push(cssClassToAdd);
			}
		};





		this.getFormlyControlTemplate = function(){
			/**
			 * 
			 */
			return _formlyControlTemplates;
		};

		this.addformlyControlTemplatesCssClass = function(cssClassToAdd){
			if (typeof cssClassToAdd !== 'undefined') {
				_formlyControlTemplates.cssClass.push(cssClassToAdd);
			}
		};

		this.setFormlyControlTemplate  = function(newFormlyControlTemplate){
			/**
			 * test object param has minimum waited properties
			 */
			if (('cssClass'					in newFormlyControlTemplate) &&
					('type' 						in newFormlyControlTemplate) &&
					('key' 							in newFormlyControlTemplate) &&
					('templateOptions') in newFormlyControlTemplate) {
				_formlyControlTemplates = angular.copy(newFormlyControlTemplate);
			}
			return true;
		};

		
		this.$get =	[

			function(){
				var Service = {};

				Service.getEasyFormListControls = function(){
					return _easyFormListControls;
				};
				/**
				 * getEasyFormInitialStateConfigurationModel : get configuration model 
				 * (back model equivalent to formly field model) at "initial state = 1 empty line"
				 * 
				 * @param  bool addStepWayProperties  : add or not properties specefic to easy form generator step way
				 * @return object  configuration model
				 */
				Service.getEasyFormInitialStateConfigurationModel = function(addStepWayProperties){
					var initialConfigurationModel = angular.copy(_easyFormInitialStateConfigurationModel);
					if (typeof addStepWayProperties !== 'undefined') {
						if (addStepWayProperties) {
							/**
							 * add properties specific to step way
							 */
							angular.extend(initialConfigurationModel, _easyFormInitialStateConfigurationModelAddOnForStepWay);
						}
					}
					return initialConfigurationModel;
				};
				/**
				 * getEasyFormInitialStateConfigurationModel : get configuration model 
				 * (back model equivalent to formly field model) at "initial state = 0 line"
				 * => good model to load a previous saved into it (just load lines and buttons names then)
				 * 
				 * @param  bool addStepWayProperties  : add or not properties specefic to easy form generator step way
				 * @return object  configuration model
				 */
				Service.getEasyFormReloadConfigurationModel = function(addStepWayProperties){
					var initialConfigurationModel = angular.copy(_easyFormReloadConfigurationModel);
					if (typeof addStepWayProperties !== 'undefined') {
						if (addStepWayProperties) {
							/**
							 * add properties specific to step way
							 */
							angular.extend(initialConfigurationModel, _easyFormInitialStateConfigurationModelAddOnForStepWay);
						}
					}
					return initialConfigurationModel;
				};




				/**
				 * getRawHeaderTemplates : return full headerTemplates object
				 *
				 * better use getHeaderTemplateForNcolumnLine to return a particular header template
				 */
				Service.getRawHeaderTemplates = function(){
					return _headerTemplates;
				};
				/**
				 * [getHeaderTemplateForNcolumnLine : return a particular header template depending n columns in lines
				 * @param   nbColInLines : an integer reflecting numbers of column template
				 * @param   textContent  : header's text
				 * @return  an headerTemplate object
				 */
				Service.getHeaderTemplateForNcolumnLine = function(nbColInLines, textContent){
					if (typeof nbColInLines !== 'undefined' &&
							typeof textContent 	!== 'undefined') {

						if (nbColInLines === parseInt(nbColInLines, 10)) {

							var headerToReturn = 	{
				    													cssClass 		: _headerTemplates.cssClass[nbColInLines],
				    													textContent : textContent,
				    													html 				: _headerTemplates.html
				    												};
				    	return headerToReturn;
						}
					}
				};





				/**
				 * getRawFormlyControlTemplates : return full generic control templates object
				 *
				 * better use getFormlyControlTemplateForNcolumnLine to return a particular control template
				 */
				Service.getRawFormlyControlTemplates = function(){
					return _formlyControlTemplates;
				};
				/**
				 * [getFormlyControlTemplateForNcolumnLine : return a particular control template depending n columns in lines
				 * @param   nbColInLines : an integer reflecting numbers of column template
				 * @return  an empty generic control template object
				 */
				Service.getFormlyControlTemplateForNcolumnLine = function(nbColInLines){
					if (typeof nbColInLines !== 'undefined') {

						if (nbColInLines === parseInt(nbColInLines, 10)) {

							var controlToReturn = 	{
					    													cssClass 				: _formlyControlTemplates.cssClass[nbColInLines],
					    													type 						: '',
					    													key  						: '',
					    													templateOptions : {} 
				    													};

				    	return controlToReturn;
						}
					}
				};				

				return Service;

			}

		];	
		
	}]);