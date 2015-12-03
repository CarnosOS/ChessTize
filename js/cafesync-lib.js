var CafeSync = CafeSync || {};
CafeSync.vibrate = function(sec){
 navigator.vibrate(sec);
};
CafeSync.capitalizeFirstLetter = function(string) { return string.charAt(0).toUpperCase() + string.slice(1); 
};