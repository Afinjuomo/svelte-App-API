<!-- src/routes/Posts.svelte -->
<script lang="ts">
    import { onMount } from 'svelte';
    import { writable } from 'svelte/store';

    // Define a type for a single post
    interface Post {
      userId: number;
      id: number;
      title: string;
      body: string;
    }

    // Define a store for the fetched data
    const posts = writable<Post[]>([]);
    const currentPage = writable<number>(1); // Track current page
    let postsPerPage = 10; // Number of posts per page (regular variable)
    let expandedPostId = -1; // ID of the post with expanded body, initially -1 means none

    // Create a store variable for the filter criteria
    const filter = writable<string>(''); // Initialize with an empty string
    
    // Function to set the filter criteria
    function setFilter(value: string) {
      filter.set(value);
    }

    // Function to fetch data from the API
    async function fetchData() {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data: Post[] = await response.json();

        posts.set(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    onMount(() => {
      fetchData();
    });

    // Function to toggle the expanded state of a post
    function toggleExpanded(postId: number) {
      expandedPostId = expandedPostId === postId ? -1 : postId;
    }
    
     
    
  
</script>

<style>
    /* Container styles */
    main {
      max-width: 800px;
      margin: 0 auto;
      padding: 20px;
      background-color: #f9f9f9;
      border-radius: 10px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }

    /* Heading styles */
    h1 {
      font-size: 24px;
      color: #333;
      margin-bottom: 20px;
    }

    /* Post card styles */
    .post-cards {
      display: grid; /* Use CSS Grid */
      grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); /* Equal width columns */
      gap: 20px;
      margin: 30px 0;
    }

    .post-card {
      background-color: #fff;
      border: 1px solid #ddd;
      border-radius: 5px;
      padding: 20px;
    }

    .post-card h2 {
      font-size: 18px;
      margin-bottom: 10px;
      color: green;
    }

    /* Expanded post body styles */
    .post-content {
      display: block;
      background-color: #f0f0f0;
      border: 1px solid #ddd;
      border-radius: 5px;
      padding: 10px;
      margin-top: 10px;
    }

    /* Pagination controls styles */
    .pagination {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 20px;
    }

    .pagination button {
      background-color: #0077cc;
      color: #fff;
      border: none;
      border-radius: 5px;
      padding: 10px 20px;
      margin: 0 10px;
      cursor: pointer;
    }

    .pagination button:disabled {
      background-color: #ccc;
      cursor: not-allowed;
    }
</style>

<main>
    <h1>Posts</h1>
   
    <!-- Add an input field for filtering -->
    <input type="text" placeholder="Search posts..." on:input={(event) => setFilter(event?.target?.value || '')} />

    <div class="post-cards">
        {#each $posts.filter((post) => post.title.toLowerCase().includes($filter.toLowerCase())) as post (post.id)}
            <div class="post-card">
                <!-- svelte-ignore a11y-invalid-attribute -->
                <a href="javascript:void(0);" on:click={() => toggleExpanded(post.id)}>
                    <h2>{post.title}</h2>
                </a>
                {#if expandedPostId === post.id}
                    <div class="post-content">
                        <p>{post.body}</p>
                    </div>
                {/if}
            </div>
        {/each}
    </div>

    <!-- Pagination controls --> 
    <div class="pagination">
        <button on:click={() => $currentPage -= 1} disabled={$currentPage === 1}>Previous</button>
        <span>Page {$currentPage}</span>
        <button on:click={() => $currentPage += 1} disabled={$posts.length <= $currentPage * postsPerPage}>Next</button>
    </div>
</main>
