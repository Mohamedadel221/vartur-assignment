<template>
  <div class="login-compo">
    <v-container>
      <v-row class="align-center">
        <v-col cols="12">
          <v-sheet class="d-flex justify-center align-center">
            <v-form @submit.prevent="login">
              <h1 class="text-center mt-3 mb-2 text-capitalize">log in</h1>
              <div class="username mt-3 mb-2">
                <v-text-field
                  type="text"
                  label="Name"
                  elevation="0"
                  variant="outlined"
                  v-model="loginUser.userName"
                  :error-messages="v$.userName.$errors.map((e) => e.$message)"
                  @blur="v$.userName.$touch()"
                  prepend-inner-icon="mdi-account"
                  icon-color="green"
                ></v-text-field>
              </div>
              <div class="password mt-3 mb-2">
                <v-text-field
                  type="password"
                  label="Password"
                  elevation="0"
                  variant="outlined"
                  v-model="loginUser.password"
                  :error-messages="v$.password.$errors.map((e) => e.$message)"
                  @blur="v$.password.$touch()"
                  prepend-inner-icon="mdi-lock"
                  icon-color="green"
                  autocomplete="password"
                ></v-text-field>
              </div>
              <div class="login-button text-center mt-3 mb-2">
                <v-btn
                  type="submit"
                  elevation="0"
                  variant="outlined"
                  width="130"
                  height="40"
                  density="compact"
                >
                  login
                </v-btn>
              </div>
              <p class="text-error text-center mt-3">{{ error }}</p>
            </v-form>
          </v-sheet>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script setup>
import { reactive, ref, computed } from "vue";
import { useRouter } from "vue-router";
import { required, helpers } from "@vuelidate/validators";
import useVuelidate from "@vuelidate/core";
import Cookies from "js-cookie";
const router = useRouter();
const error = ref("");

const loginUser = reactive({
  userName: "",
  password: "",
});

const rules = computed(() => ({
  userName: {
    required: helpers.withMessage("Name is required", required),
  },
  password: {
    required: helpers.withMessage("Password is required", required),
  },
}));

const v$ = useVuelidate(rules, loginUser);

const login = async () => {
  error.value = "";
  const isValid = await v$.value.$validate();

  if (!isValid) {
    return;
  }

  if (loginUser.userName === "admin" && loginUser.password === "admin") {
    Cookies.set("isUserLogin", "true");
    Cookies.set("name", "admin");
    router.push({ name: "home" });
  } else {
    error.value = "Invalid username or password";
  }
};
</script>

<style lang="scss" scoped>
.v-sheet {
  min-height: 80vh;
  .v-text-field {
    width: 350px;
  }
}
</style>
