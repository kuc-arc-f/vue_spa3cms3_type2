<template>
<div class="box_wrap">
    <router-link :to="'/show/' + item.show_id">
        <div class="date_box font-italic"> {{ item.box_date }}
        </div>
        <div class="icon_box">
            <i class="far fa-sticky-note"></i>
        </div>
        <div class="title_box">
            <h3 class="mt-2">{{ item.title }}
            </h3>
        </div>
        <p class="mb-2">{{ item.created_at }} , ID : {{ item.id }}
        </p>
    </router-link>
</div>
</template>

<!-- -->
<script>
import {Mixin} from '../../mixin'

export default {
    mixins:[Mixin],
    props: ['item'],
    created (){},
}
</script>

