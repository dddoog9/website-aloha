'use strict'

// constants
const MEDIUM_BREAKPOINT = 767.98
const HEADER_HEIGHT = 88

// add a shadow on the header on scroll
$(window).scroll(function () {
  const innerWidth = $(this).innerWidth()
  const scrollTop = $(this).scrollTop()

  $('#header').toggleClass('header_shadow',
    (innerWidth < MEDIUM_BREAKPOINT && scrollTop > (HEADER_HEIGHT / 4))
  )
})

// locked or unlocked scroll on change checkbox
$('#hamburger-menu__toggle').change(function () {
  const body = $('body')

  if ($(this).is(':checked')) {
    body.addClass('lock-scroll')
  } else {
    body.removeClass('lock-scroll')
  }
})

// unchecked & unlocked scroll on resize
$(window).resize(function () {
  const innerWidth = $(this).innerWidth()
  const hamburgerToggle = $('#hamburger-menu__toggle')

  if (innerWidth > MEDIUM_BREAKPOINT && hamburgerToggle.is(':checked')) {
    hamburgerToggle.prop('checked', false)

    $('body').removeClass('lock-scroll')
  }
})

// unchecked & unlocked scroll on click
$('.hamburger-nav__link').click(function () {
  const hamburgerToggle = $('#hamburger-menu__toggle')

  if (hamburgerToggle.is(':checked')) {
    hamburgerToggle.prop('checked', false)

    $('body').removeClass('lock-scroll')
  }
})
