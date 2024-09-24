define('stream-pro:views/stream/notes/update', ['views/stream/notes/update'], (UpdateNoteStreamView) => {

    return class extends UpdateNoteStreamView {
 
         afterRender() {
             super.afterRender();
             if (this.getConfig().get('streamUpdatesExpanded')) {
                this.$el.find('.details').removeClass('hidden');
                this.$el.find('.fields').addClass('hidden');
            }
            if (this.getConfig().get('streamFullDateTime')) {
                $("div.stream-date-container a span").text(function() {
                    return $(this).attr('title');
                });
            }
         }
     }
});