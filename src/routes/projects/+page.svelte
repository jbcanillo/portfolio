<script lang="ts">
  import Modal from "$lib/components/modal.svelte";
  import Fab from "$lib/components/fab.svelte";

  let show_modal = false;
</script>

<Fab onClick={() => (show_modal = !show_modal)}/>
  
<form method="POST" enctype="multipart/form-data" action="?/create">
  <Modal bind:show_modal>
    <hgroup slot="header">
      <h2>Add a Project</h2>
      <h3>Setup your project details here</h3>
    </hgroup>
      <div slot="content">
          <div class="grid">
            <label for="name">
              Project Name
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Project Name"
                aria-label="Project Name"
                required
              />
            </label>
          </div>
          <div class="grid">
            <label for="description">
              Description
              <textarea
                id="description"
                name="description"
                placeholder="Description"
                aria-label="Description"
                rows=4
              ></textarea>
            </label>
          </div>
          <div class="grid">
            <label for="category">
              Category
              <select id="category" 
                name="category" 
                placeholder="Category" 
                aria-label="Category"
                required>
                <option value="">Select</option>
                <option value="Development">Development</option>
                <option value="Tech-support">Tech-support</option>
              </select>
            </label>
            <label for="color">
              Color
              <select 
                id="color" 
                name="color" 
                placeholder="Color" 
                aria-label="Color"
                required>
                <option value="">Select</option>
                <option value="Green">Green</option>
                <option value="Red">Red</option>
                <option value="Blue">Blue</option>
                <option value="Yellow">Yellow</option>
                <option value="Orange">Orange</option>
              </select>
            </label>
          </div>
      </div>
      <div slot="footer">
        <button type="submit">Save</button>
      </div>
  </Modal>
</form>
