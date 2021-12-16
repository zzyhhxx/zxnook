<template>
  <view>
      <view class="item">
			<view class="label">{{label}}</view>
			<view class="desc">
				<editor id="editor" class="ql-container" :placeholder="placeholder" @blur="onBlur" @ready="onEditorReady"></editor>
			</view>
		</view>
      
  </view>
</template>

<script>
export default {
    name: 'Editor',
    props: {
        label: {
            type: String,
            default: ''
        },
        propName: {
            type: String,
            default: ''
        },
        defaultValue: {
            type: String,
            default: ''
        },
        placeholder: {
            type: String,
            default: '请输入...'
        }
    },
    data() {
        return {
            editorCtx: ''
        }
    },
    watch: {
      defaultValue(newVal) {
          newVal && this.editorCtx && this.editorCtx.setContents({html: newVal});
      }  
    },
    methods: {
        onBlur(e) {
            console.log(e)
            this.$emit('change', {name: this.propName, value: e.detail.text});
        },
        onEditorReady() {
            uni.createSelectorQuery().select('#editor').context((res) => {
                this.editorCtx = res.context
            }).exec()
        }
    }
}
</script>

<style scoped>
.item {
    width: 604rpx;
}
.label {
    width: fit-content;
    color: #565D80;
}
.desc {
    margin-top: 20rpx;
}
#editor {
    height: 200rpx;
    min-height: 200rpx;
    border: 1px solid #c5c7cf;
    border-radius: 10rpx;
    padding: 16rpx;
}
</style>