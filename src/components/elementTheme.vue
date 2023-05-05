<template>
  <el-container>
    <el-aside class="theme-aside" width="280px">
      <el-row>
        <el-col :span="12">
          <el-select
            v-model="themeValueSelect"
            class="theme-select"
            placeholder="选择样式组件"
          >
            <el-option
              v-for="(key) in themeData"
              :key="key"
              :label="key"
              :value="key"
            />
          </el-select>
        </el-col>
        <el-col :span="12">
          <el-button-group>
            <el-button type="primary" plain @click="revertTheme"
              >还原</el-button
            >
            <el-button type="primary" plain @click="saveTheme">保存</el-button>
          </el-button-group>
        </el-col>
      </el-row>

      <div
        v-for="(attributeList, attributeKey) in themeData[themeValueSelect]"
        :key="'ATTRIBUTE_' + attributeKey"
      >
        <div class="theme-attribute-group">
          <div class="theme-attribute-group-title">{{ attributeKey }}</div>

          <div class="theme-attribute-item">
            <div
              v-for="(attributeItem, attributeItemIndex) in attributeList"
              :key="'ATTRIBUTE_ITEM_' + attributeItemIndex"
            >
              <div class="theme-attribute-item-title">
                {{ attributeItem.name }}
                <el-alert
                  v-if="attributeItem.desc"
                  :title="attributeItem.desc"
                  type="warning"
                  :closable="false"
                />
              </div>
              <div class="theme-attribute-item-value">
                <el-input
                  v-if="attributeItem.value"
                  v-model="attributeItem.value"
                  placeholder="输入值"
                  @input="(val: string) => inputChange(val, attributeItem.name)"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </el-aside>
    <el-main class="custom-style el-color">
      <div>
        <h3>Color</h3>
        <h4>主色 BorderColor</h4>
        <el-row>
          <div
            class="color-item"
            :style="'background-color:var(' + attributeList.name + ')'"
            v-for="(attributeList, attributeKey) in themeData['Color'][
              'BrandColor'
            ]"
            :key="'ATTRIBUTE_' + attributeKey"
          >
            <div>{{ attributeList.name }}</div>
            <div>{{ attributeList.value }}</div>
          </div>
        </el-row>
        <h4>辅助色 FunctionalColor</h4>
        <el-row :gutter="20">
          <el-col
            :span="6"
            v-for="(attributeList, attributeKey) in themeData['Color'][
              'FunctionalColor'
            ]"
            :key="'ATTRIBUTE_' + attributeKey"
          >
            <div
              class="color-item"
              :style="'background-color:var(' + attributeList.name + ')'"
            >
              <div>{{ attributeList.name }}</div>
              <div>{{ attributeList.value }}</div>
            </div>
          </el-col>
        </el-row>
        <h4>中性色 - 字体 FontColor</h4>
        <el-row :gutter="20">
          <el-col
            :span="6"
            v-for="(attributeList, attributeKey) in themeData['Color'][
              'FontColor'
            ]"
            :key="'ATTRIBUTE_' + attributeKey"
          >
            <div
              class="color-item"
              :style="'background-color:var(' + attributeList.name + ')'"
            >
              <div>{{ attributeList.name }}</div>
              <div>{{ attributeList.value }}</div>
            </div>
          </el-col>
        </el-row>
        <h4>中性色 - 边框 BorderColor</h4>
        <el-row :gutter="20">
          <el-col
            :span="6"
            v-for="(attributeList, attributeKey) in themeData['Color'][
              'BorderColor'
            ]"
            :key="'ATTRIBUTE_' + attributeKey"
          >
            <div
              class="color-item color-item2"
              :style="'background-color:var(' + attributeList.name + ')'"
            >
              <div>{{ attributeList.name }}</div>
              <div>{{ attributeList.value }}</div>
            </div>
          </el-col>
        </el-row>
        <h4>中性色 - 背景 BackgroundColor</h4>
        <el-row :gutter="20">
          <el-col
            :span="6"
            v-for="(attributeList, attributeKey) in themeData['Color'][
              'BackgroundColor'
            ]"
            :key="'ATTRIBUTE_' + attributeKey"
          >
            <div
              class="color-item color-item2"
              :style="'background-color:var(' + attributeList.name + ')'"
            >
              <div>{{ attributeList.name }}</div>
              <div>{{ attributeList.value }}</div>
            </div>
          </el-col>
        </el-row>
      </div>
      <div>
        <h3>Alert</h3>
        <el-alert
          title="success alert"
          description="more text description"
          type="success"
          show-icon
          close-text="关闭"
        />
        <el-alert
          title="info alert"
          description="more text description"
          type="info"
          show-icon
          close-text="关闭"
        />
        <el-alert
          title="warning alert"
          description="more text description"
          type="warning"
          show-icon
        />
        <el-alert
          title="error alert"
          description="more text description"
          type="error"
          show-icon
        />
      </div>
      <div>
        <h3>Button</h3>
        <el-row class="mb-4">
          <el-button>Default</el-button>
          <el-button type="primary">Primary</el-button>
          <el-button type="success">Success</el-button>
          <el-button type="info">Info</el-button>
          <el-button type="warning">Warning</el-button>
          <el-button type="danger">Danger</el-button>
        </el-row>

        <el-row class="mb-4">
          <el-button plain>Plain</el-button>
          <el-button type="primary" plain>Primary</el-button>
          <el-button type="success" plain>Success</el-button>
          <el-button type="info" plain>Info</el-button>
          <el-button type="warning" plain>Warning</el-button>
          <el-button type="danger" plain>Danger</el-button>
        </el-row>

        <el-row class="mb-4">
          <el-button round>Round</el-button>
          <el-button type="primary" round>Primary</el-button>
          <el-button type="success" round>Success</el-button>
          <el-button type="info" round>Info</el-button>
          <el-button type="warning" round>Warning</el-button>
          <el-button type="danger" round>Danger</el-button>
        </el-row>
      </div>
    </el-main>
  </el-container>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from "vue";
import { themeWhite } from "./theme";
import _ from "lodash";

export default defineComponent({
  name: "ElementTheme",
  setup() {
    // 如果缓存有，使用缓存
    let themeOriginalItem = localStorage.getItem("themeOriginal");
    let themeOriginal;
    if (themeOriginalItem) {
      themeOriginal = _.cloneDeep(JSON.parse(themeOriginalItem));
    } else {
      themeOriginal = _.cloneDeep(themeWhite);
    }

    const themeData: any = reactive(themeOriginal);
    const themeValueSelect = ref("Color");
    let themeNew: any = _.cloneDeep(themeOriginal);

    const squareUrl = ref(
      "https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png"
    );

    // console.log(themeData);

    /**
     * 响应文本框修改
     *
     * @param val
     * @param name
     */
    function inputChange(val: string, name: string) {
      console.log("动态值：", val);
      console.log("动态值name：", name);

      // 设置样式
      const el = document.getElementsByClassName(
        "el-" + themeValueSelect.value.toLowerCase()
      );
      for (let i = 0; i < el.length; i++) {
        let dom = el.item(i) as HTMLElement;
        if (dom) {
          dom.style.setProperty(name, val);
        }
      }

      // 更新themeData
      for (let key in themeNew[themeValueSelect.value]) {
        let value = themeNew[themeValueSelect.value][key];

        value.forEach((element: any) => {
          if (element.name === name) {
            element.value = val;
          }
        });
      }

      // console.log(themeNew);
    }

    function revertTheme() {
      let themeOld = _.cloneDeep(themeWhite);
      // 加载原始值
      console.log("重置值：", themeOld);

      for (const key in themeOld) {
        themeData[key] = themeOld[key];
      }

      for (const key in themeData) {
        let themeItem = themeData[key];

        for (let themeItemKey in themeItem) {
          let value = themeItem[themeItemKey];

          value.forEach((element: any) => {
            inputChange(element.value, element.name);
          });
        }
      }
    }

    function saveTheme() {
      console.log("选择值：", themeValueSelect.value);
      // 原始数据
      localStorage.setItem("themeOriginal", JSON.stringify(themeData));
      // 转CSS
      let jsonText = "";
      for (const key in themeNew) {
        let themeItem = themeNew[key];
        jsonText += `.el-${key.toLowerCase()} { `;

        for (let themeItemKey in themeItem) {
          let value = themeItem[themeItemKey];

          value.forEach((element: any) => {
            jsonText += `${element.name}:${element.value};`;
          });
          // console.log(jsonText);
        }

        jsonText += `}`;
      }

      localStorage.setItem("themeCss", jsonText);
    }

    return {
      themeData,
      themeValueSelect,
      revertTheme,
      saveTheme,
      inputChange,
      squareUrl,
    };
  },
});
</script>

<style scoped>
.color-item {
  margin-bottom: 10px;
  padding: 20px;
  height: 40px;
  border: 1px solid var(--el-border-color);
}

.color-item div {
  color: #fff;
}

.color-item2 div {
  color: #000;
}

.el-container {
  height: 100%;
}
.custom-style {
  height: 100%;
  overflow: auto;
}

.theme-select {
  margin-right: 8px;
}

.theme-aside {
  padding: 10px;
  background: #f5f7fa;
}
.theme-attribute-group .theme-attribute-group-title {
  margin: 8px 0;
  color: #c0c4cc;
  font-size: 18px;
}

.theme-attribute-group .theme-attribute-group-title {
  margin: 8px 0;
  color: #c0c4cc;
  font-size: 18px;
}

.theme-attribute-group .theme-attribute-group-title {
  margin: 8px 0;
  color: #c0c4cc;
  font-size: 18px;
}

.theme-attribute-group .theme-attribute-item .theme-attribute-item-title {
  padding-bottom: 6px;
  color: #606266;
  font-size: 14px;
}

.theme-attribute-group .theme-attribute-item .theme-attribute-item-value {
  margin: 0 0 16px 0;
}
</style>
