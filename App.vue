<template lang="pug">
  div(id="app")
    //- Menu(mode="horizontal" theme="dark" active-name="1")
    //-   MenuItem(name="1")
    //-     router-link(to="/images") images
    router-view
</template>

<script>
import store from './store';
export default {
	created() {
		store.dispatch('INIT_APP');
	}
};
</script>

<style lang="stylus">
@import url('~iview/dist/styles/iview.css');

body {
  background: #151c2d;
}

#app {
  .vue-waterfall-easy-container {
    .vue-waterfall-easy {
      .img-inner-box{
        border-radius: 5px;
        box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15); 
        -webkit-transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
        transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
        img {
          border-top-right-radius 5px
          border-top-left-radius 5px
      		opacity 0.85
        }
        img:hover{
          opacity 0.9
        }
      }
      .img-inner-box::after {
        content: "";
        border-radius: 5px;
        position: absolute;
        z-index: -1;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
        opacity: 0;
        -webkit-transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
        transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
      }
      .img-inner-box:hover {
        -webkit-transform: scale(1.05, 1.05);
        transform: scale(1.05, 1.05);
      }

      .img-inner-box:hover::after {
          opacity: 1;
      }
    }
  }
}

.ivu-card-head {
  padding: 8px 16px;
}
.ivu-btn-default, .ivu-btn-dashed, .ivu-btn-primary{
    background #21243a
    border-color #21243a
    color rgba(255,255,255,0.8)
}

.ivu-menu-horizontal {
    background #21243a
    border-color #21243a
    height: 40px;
    line-height: 40px;
    display: flex;
    justify-content: center;
  }
    .ivu-input {
      background #21243a
      border none 
      color rgba(255,255,255,0.8)
      border-top-left-radius 50px
      border-bottom-left-radius 50px
      text-indent 10px
    }
  .ivu-card-head{
      background rgba(0,0,0,0)
      border: none
  }
  .ivu-tag {
    background #21243a
    border none
    border-radius 25px
    .ivu-tag-text{
      color rgba(255,255,255,0.5)
    }
  }

  .ivu-select-selection {
    background #21243a
    color rgba(255,255,255,0.8)
    border none
    border-radius 50px
    text-indent 10px
  }
  .ivu-select-item {
    background #21243a
    color rgba(255,255,255,0.5)
  }
  .ivu-select-item-selected{
    color #2d8cf0
  }
  .ivu-select-dropdown {
    background #21243a
  }
  .ivu-modal-content{
    background #32333c
  }

  ::-webkit-scrollbar {
    background:rgba(255,255,255,0.05);
  }
  ::-webkit-scrollbar-thumb{
    background:rgba(255,255,255,0.1);
    border-radius 100px
  }
</style>
