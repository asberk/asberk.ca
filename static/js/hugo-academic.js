(function($){let $navbar=$('.navbar-header');let navbar_offset=$navbar.innerHeight();function scrollToAnchor(target){target=(typeof target==='undefined'||typeof target==='object')?window.location.hash:target;target=target.replace(/:/g,'\\:');if($(target).length){$('body').addClass('scrolling');$('html, body').animate({scrollTop:$(target).offset().top-navbar_offset},600,function(){$('body').removeClass('scrolling');});}}function fixScrollspy(){let $body=$('body');let data=$body.data('bs.scrollspy');if(data){data.options.offset=navbar_offset;$body.data('bs.scrollspy',data);$body.scrollspy('refresh');}}window.addEventListener("hashchange",scrollToAnchor);$('#navbar-main li.nav-item a').on('click',function(event){let hash=this.hash;if(hash&&$(hash).length&&($("#homepage").length>0)){event.preventDefault();$('html, body').animate({scrollTop:$(hash).offset().top-navbar_offset},800);}});$('#back_to_top').on('click',function(event){event.preventDefault();$('html, body').animate({'scrollTop':0},800,function(){window.location.hash="";});});$(document).on('click','.navbar-collapse.in',function(e){let targetElement=$(e.target).is('a')?$(e.target):$(e.target).parent();if(targetElement.is('a')&&targetElement.attr('class')!='dropdown-toggle'){$(this).collapse('hide');}});let $grid_projects=$('#container-projects');$grid_projects.imagesLoaded(function(){$grid_projects.isotope({itemSelector:'.isotope-item',layoutMode:'masonry'});$('#filters a').click(function(){let selector=$(this).attr('data-filter');$grid_projects.isotope({filter:selector});$(this).removeClass('active').addClass('active').siblings().removeClass('active all');return false;});});let $grid_pubs=$('#container-publications');$grid_pubs.isotope({itemSelector:'.isotope-item',percentPosition:true,masonry:{columnWidth:'.grid-sizer'}});$('.pub-filters-select').on('change',function(){let filterValue=this.value;$grid_pubs.isotope({filter:filterValue});let url=$(this).val();if(url.substr(0,9)=='.pubtype-'){window.location.hash=url.substr(9);}else{window.location.hash='';}});function filter_publications(){let urlHash=window.location.hash.replace('#','');let filterValue='*';if(urlHash!=''&&!isNaN(urlHash)){filterValue='.pubtype-'+urlHash;}$('.pub-filters-select').val(filterValue);$grid_pubs.isotope({filter:filterValue});}$(window).on('load',function(){if(window.location.hash){if(window.location.hash=="#top"){window.location.hash=""}else{scrollToAnchor();}}let $body=$('body');$body.scrollspy({offset:navbar_offset});let resizeTimer;$(window).resize(function(){clearTimeout(resizeTimer);resizeTimer=setTimeout(fixScrollspy,200);});if($('.pub-filters-select')){filter_publications();}});})(jQuery);