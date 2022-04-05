<template>
    <div class="single-player">
        <div class="container">
            <div class="d-flex flex-wrap">
                <div class="ms-album">
                    <div class="ms-thumb">
                        <img class="w-100" src="../../assets/images/petals-for-armor.jpg" alt="">
                    </div>
                    <div class="ms-th-info">
                        <h4>Simmer</h4>
                        <span>Hayley Williams</span>
                    </div>
                </div>
                <div class="ms-player" id="jp_container_2">
                    <div class="jp-controls text-center">
                        <button class="jp-previous" tabindex="0"><i class="fa fa-backward"></i></button>
                        <button class="jp-play" tabindex="0"><i class="fas fa-play"></i></button>
                        <button class="jp-next" tabindex="0"><i class="fa fa-forward"></i></button>
                    </div>
                    <div class="title-bar">
                        <div class="ms-top">
                            <h4 class="jp-title">Bubble</h4>
                            <div class="jp-time-holder">
                                <div class="jp-current-time" role="timer" aria-label="time">00:01</div>
                                <div class="jp-duration" role="timer" aria-label="duration">03:29</div>
                            </div>
                        </div>
                        <div class="jp-progress">
                            <div class="jp-seek-bar" style="width: 100%;">
                                <div class="jp-play-bar" style="width: 0.843646%;"></div>
                            </div>
                        </div>
                    </div>
                    <div class="jp-volume-controls">
                        <button class="jp-mute" tabindex="0">
                            <i class="fa fa-volume-up"></i>
                        </button>
                    </div>
                </div>
                <!--ms-player end-->
            </div>
            <!--ms-player-content end-->
        </div>
    </div>
</template>

<script>
    export default {

    }
</script>

<style scoped>
.single-player {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: rgba(0,0,0,0.70);
  padding: 20px 0;
  z-index: 99;
}

.ms-album {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  max-width: 255px;
  flex: 0 0 255px;
}

.ms-thumb {
  max-width: 76px;
  flex: 0 0 76px;
}

.ms-th-info {
  padding-left: 12px;
  text-align: left;
}

.ms-th-info > h4 {
  color: #ffffff;
  font-size: 14px;
  text-transform: uppercase;
}

.ms-th-info > span {
  display: block;
  color: #fcb62b;
  font-size: 14px;
}

.ms-player {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  flex: 0 0 calc(100% - 255px);
  max-width: calc(100% - 255px);
}

.ms-player .jp-controls {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin-right: 44px;
}


</style>