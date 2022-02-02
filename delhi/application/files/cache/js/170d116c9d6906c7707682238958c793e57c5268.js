$(function(){$('select[data-select=multilingual-switch-language]').change(function(){var action=$(this).attr('data-action').replace('--language--',$(this).val());window.location.href=action;});});

$(function(){$('img.ccm-image-block.primary').hover(function(){$(this).attr('oldsrc',$(this).attr('src'));$(this).attr('src',$(this).next('img.ccm-image-block.alternate').attr('src'));},function(){$(this).attr('src',$(this).attr('oldsrc'));});});

