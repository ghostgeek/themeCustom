// 支持清单
const themeWhite: any = {
    // Alert: {
    //     Font: [
    //         { name: '--el-alert-title-font-size', value: '13px' },
    //         {
    //             name: '--el-alert-description-font-size',
    //             value: '12px'
    //         },
    //         {
    //             name: '--el-alert-close-font-size',
    //             value: '12px'
    //         },
    //         {
    //             name: '--el-alert-close-customed-font-size',
    //             value: '13px'
    //         }
    //     ],
    //     Border: [
    //         {
    //             name: '--el-alert-border-radius-base',
    //             value: '4px'
    //         }
    //     ],
    //     Other: [
    //         {
    //             name: '--el-alert-icon-size',
    //             value: '16px'
    //         },
    //         {
    //             name: '--el-alert-icon-large-size',
    //             value: '28px'
    //         }
    //     ]
    // },
    // Avatar: {
    //     Color: [
    //         {
    //             name: '--el-avatar-text-color',
    //             value: '#fff'
    //         },
    //         {
    //             name: '--el-avatar-bg-color',
    //             value: '#c0c4cc'
    //         }
    //     ],
    //     FontSize: [
    //         {
    //             name: '--el-avatar-text-size',
    //             value: '14px'
    //         },
    //         {
    //             name: '--el-avatar-icon-size',
    //             value: '18px'
    //         }
    //     ],
    //     Border: [
    //         {
    //             name: '--el-avatar-border-radius',
    //             value: '4px',
    //             desc: '继承--el-border-radius-base'
    //         }
    //     ],
    //     AvatarSize: [
    //         // {
    //         //     name: '--el-avatar-size-large',
    //         //     value: '56px'
    //         // },
    //         {
    //             name: '--el-avatar-size',
    //             value: '40px',
    //             desc: 'large 56px,small 24px，但是源码中large small为写死的样式'
    //         }
    //         // {
    //         //     name: '--el-avatar-size-small',
    //         //     value: '54px'
    //         // }
    //     ]
    // },
    // Backtop: {
    //     Color: [
    //         {
    //             name: '--el-backtop-bg-color',
    //             value: '#ffffff'
    //         },
    //         {
    //             name: '--el-backtop-text-color',
    //             value: '#409eff'
    //         },
    //         {
    //             name: '--el-backtop-hover-bg-color',
    //             value: '#f2f6fc'
    //         }
    //     ]
    // },
    // Badge: {
    //     Color: [
    //         {
    //             name: '--el-badge-bg-color',
    //             desc: 'primary | success | warning | danger | info依赖主题Color'
    //         }
    //     ],
    //     Font: [
    //         {
    //             name: '--el-badge-font-size',
    //             value: '12px'
    //         }
    //     ],
    //     Spacing: [
    //         {
    //             name: '--el-badge-padding',
    //             value: '6px'
    //         }
    //     ],
    //     Other: [
    //         {
    //             name: '--el-badge-size',
    //             value: '18px'
    //         }
    //     ]
    // },
    // Border: {
    //     Radius: [
    //         {
    //             name: '--el-border-radius-base',
    //             value: '4px',
    //             desc: '大圆角 20px,小圆角 2px,默认 4px'
    //         },
    //         {
    //             name: '--el-border-radius-small',
    //             value: '2px',
    //             desc: '大圆角 20px,小圆角 2px,默认 4px'
    //         }
    //     ],
    //     Shadow: []
    // },
    // Button: {},
    // Calendar: {},
    // Card: {},
    // Carousel: {},
    // Cascader: {},
    // Checkbox: {},
    // Collapse: {},
    Color: {
        BrandColor: [
            {
                name: '--el-color-primary',
                value: '#409eff'
            }
        ],
        FunctionalColor: [
            {
                name: '--el-color-success',
                value: '#67c23a'
            },
            {
                name: '--el-color-warning',
                value: '#e6a23c'
            },
            {
                name: '--el-color-danger',
                value: '#f56c6c'
            },
            {
                name: '--el-color-error',
                value: '#f56c6c',
                desc: '一般和--el-color-danger一致'
            },
            {
                name: '--el-color-info',
                value: '#909399'
            }
        ],
        FontColor: [
            {
                name: '--el-text-color-primary',
                value: '#303133'
            },
            {
                name: '--el-text-color-regular',
                value: '#606266'
            },
            {
                name: '--el-text-color-secondary',
                value: '#909399'
            },
            {
                name: '--el-text-color-placeholder',
                value: '#a8abb2'
            },
            {
                name: '--el-text-color-disabled',
                value: '#c0c4cc'
            }
        ],
        BorderColor: [
            {
                name: '--el-border-color',
                value: '#dcdfe6',
                desc: '修改后可以看到右侧边框颜色变化'
            },
            {
                name: '--el-border-color-light',
                value: '#e4e7ed'
            },
            {
                name: '--el-border-color-lighter',
                value: '#ebeef5'
            },
            {
                name: '--el-border-color-extra-light',
                value: '#f2f6fc'
            },
            {
                name: '--el-border-color-dark',
                value: '#d4d7de'
            },
            {
                name: '--el-border-color-darker',
                value: '#cdd0d6'
            }
        ],
        BackgroundColor: [
            {
                name: '--el-fill-color',
                value: '#f0f2f5'
            },
            {
                name: '--el-fill-color-light',
                value: '#f5f7fa'
            },
            {
                name: '--el-fill-color-lighter',
                value: '#fafafa'
            },
            {
                name: '--el-fill-color-extra-light',
                value: '#fafcff'
            },
            {
                name: '--el-fill-color-dark',
                value: '#ebedf0'
            },
            {
                name: '--el-fill-color-darker',
                value: '#e6e8eb'
            },
            {
                name: '--el-fill-color-blank',
                value: '#ffffff'
            }
        ]
    }
    // Datepicker: {},
    // Dialog: {},
    // Form: {},
    // Input: {},
    // Link: {},
    // Loading: {},
    // Menu: {},
    // Message: {},
    // MessageBox: {},
    // Notification: {},
    // Pagination: {},
    // Popover: {},
    // Popup: {},
    // Radio: {},
    // Rate: {},
    // Select: {},
    // Slider: {},
    // Switch: {},
    // Table: {},
    // Tag: {},
    // Tooltip: {},
    // Transfer: {},
    // Tree: {},
    // Typography: {}
};

export { themeWhite };
